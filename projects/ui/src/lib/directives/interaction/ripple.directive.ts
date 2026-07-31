import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[ksRipple]',
  standalone: true,
})
export class RippleDirective {
  private readonly el: ElementRef<HTMLElement> = inject(ElementRef);

  /** Color personalizado para la onda (por defecto toma un blanco semi-transparente) */
  readonly color = input<string>('rgba(255, 255, 255, 0.35)', { alias: 'ksRippleColor' });

  /** Deshabilita el efecto de onda */
  readonly disabled = input<boolean>(false, { alias: 'ksRippleDisabled' });

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.disabled()) return;

    const hostEl = this.el.nativeElement;
    const rect = hostEl.getBoundingClientRect();

    // Asegura que el contenedor host tenga posicionamiento relativo e overflow hidden
    const computedPosition = window.getComputedStyle(hostEl).position;
    if (computedPosition === 'static') {
      hostEl.style.position = 'relative';
    }
    hostEl.style.overflow = 'hidden';

    // Calcula el tamaño y posición del ripple según el clic
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = this.color();
    ripple.style.pointerEvents = 'none';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ks-ripple-animation 600ms cubic-bezier(0.4, 0, 0.2, 1)';

    // Inyecta animación si no existe
    this.ensureAnimationStyles();

    hostEl.appendChild(ripple);

    // Remueve el elemento del DOM tras finalizar la animación
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  private ensureAnimationStyles(): void {
    if (document.getElementById('ks-ripple-styles')) return;

    const style = document.createElement('style');
    style.id = 'ks-ripple-styles';
    style.innerHTML = `
      @keyframes ks-ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

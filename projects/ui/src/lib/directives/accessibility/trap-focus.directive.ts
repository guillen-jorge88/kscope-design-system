import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[ksTrapFocus]',
  standalone: true,
})
export class TrapFocusDirective {
  private readonly el = inject(ElementRef);

  /** Activa/desactiva la trampa de foco */
  readonly enabled = input<boolean>(true, { alias: 'ksTrapFocus' });

  @HostListener('keydown.tab', ['$event'])
  handleTabKey(event: KeyboardEvent): void {
    if (!this.enabled()) return;

    // Obtener todos los elementos enfocables del contenedor
    const focusableElements = this.el.nativeElement.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey && document.activeElement === firstElement) {
      // Shift + Tab en el primer elemento -> Salta al último
      lastElement.focus();
      event.preventDefault();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      // Tab en el último elemento -> Salta al primero
      firstElement.focus();
      event.preventDefault();
    }
  }
}

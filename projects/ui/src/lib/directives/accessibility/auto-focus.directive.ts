import { AfterViewInit, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[ksAutoFocus]',
  standalone: true,
})
export class AutoFocusDirective implements AfterViewInit {
  private readonly el = inject(ElementRef);

  /** Habilita o deshabilita el enfoque automático dinámicamente */
  readonly enabled = input<boolean>(true, { alias: 'ksAutoFocus' });

  /** Delay opcional en ms para esperar animaciones de entrada (ej: modales) */
  readonly delay = input<number>(0, { alias: 'ksAutoFocusDelay' });

  ngAfterViewInit(): void {
    if (this.enabled()) {
      setTimeout(() => {
        this.el.nativeElement.focus();
      }, this.delay());
    }
  }
}

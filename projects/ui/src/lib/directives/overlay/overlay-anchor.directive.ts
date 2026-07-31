import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[ksOverlayAnchor]',
  standalone: true,
})
export class OverlayAnchorDirective {
  /** Expone la referencia del elemento como punto de anclaje visual para paneles flotantes */
  readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
}

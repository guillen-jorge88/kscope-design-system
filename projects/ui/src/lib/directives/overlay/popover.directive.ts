import { Directive, ElementRef, HostListener, inject, input, output } from '@angular/core';

export type ksPopoverPlacement = 'top' | 'bottom' | 'left' | 'right';

@Directive({
  selector: '[ksPopoverTrigger]',
  standalone: true,
})
export class PopoverDirective {
  readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Ubicación preferida del popover con respecto al disparador */
  readonly placement = input<ksPopoverPlacement>('bottom', { alias: 'ksPopoverPlacement' });

  /** Emite cuando se togglea la visibilidad del popover */
  readonly popoverToggled = output<{ origin: HTMLElement; placement: ksPopoverPlacement }>();

  @HostListener('click')
  onClick(): void {
    this.popoverToggled.emit({
      origin: this.elementRef.nativeElement,
      placement: this.placement(),
    });
  }
}

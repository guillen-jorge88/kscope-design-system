import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[ksAriaDescribedby]',
  standalone: true,
})
export class AriaDescribedbyDirective {
  /** ID del elemento que contiene la descripción o mensaje de error */
  readonly describedById = input<string | null>(null, { alias: 'ksAriaDescribedBy' });

  @HostBinding('attr.aria-describedby')
  get ariaDescribedBy(): string | null {
    return this.describedById();
  }
}

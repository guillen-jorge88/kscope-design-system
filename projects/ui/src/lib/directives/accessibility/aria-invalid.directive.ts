import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[ksAriaInvalid]',
  standalone: true,
})
export class AriaInvalidDirective {
  /** Indica si el estado del control es inválido */
  readonly isInvalid = input<boolean>(false, { alias: 'ksAriaInvalid' });

  @HostBinding('attr.aria-invalid')
  get ariaInvalid(): string {
    return String(this.isInvalid());
  }
}

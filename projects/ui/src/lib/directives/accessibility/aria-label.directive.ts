import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[ksAriaLabel]',
  standalone: true,
})
export class AriaLabelDirective {
  /** Texto alternativo accesible */
  readonly label = input<string | null>(null, { alias: 'ksAriaLabel' });

  @HostBinding('attr.aria-label')
  get ariaLabel(): string | null {
    return this.label();
  }
}

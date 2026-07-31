import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[ksAriaExpanded]',
  standalone: true,
})
export class AriaExpandedDirective {
  /** Estado de expansión */
  readonly isExpanded = input<boolean>(false, { alias: 'ksAriaExpanded' });

  @HostBinding('attr.aria-expanded')
  get ariaExpanded(): string {
    return String(this.isExpanded());
  }
}

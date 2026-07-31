import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[ksAriaControls]',
  standalone: true,
})
export class AriaControlsDirective {
  /** ID del elemento objetivo que este control domina */
  readonly targetId = input<string | null>(null, { alias: 'ksAriaControls' });

  @HostBinding('attr.aria-controls')
  get ariaControls(): string | null {
    return this.targetId();
  }
}

import { Directive, HostListener, input } from '@angular/core';

@Directive({
  selector: '[ksPreventEnterSubmit]',
  standalone: true,
})
export class PreventEnterSubmitDirective {
  readonly enabled = input<boolean>(true, { alias: 'ksPreventEnterSubmit' });

  @HostListener('keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent): void {
    if (this.enabled()) {
      event.preventDefault();
    }
  }
}

import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[ksUppercase]',
  standalone: true,
})
export class UppercaseDirective {
  private readonly el = inject(ElementRef<HTMLInputElement>);

  readonly enabled = input<boolean>(true, { alias: 'ksUppercase' });

  @HostListener('input')
  onInput(): void {
    if (!this.enabled()) return;

    const inputEl = this.el.nativeElement;
    const start = inputEl.selectionStart;
    const end = inputEl.selectionEnd;

    inputEl.value = inputEl.value.toUpperCase();
    inputEl.setSelectionRange(start, end);
  }
}

import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[ksLowercase]',
  standalone: true,
})
export class LowercaseDirective {
  private readonly el = inject(ElementRef<HTMLInputElement>);

  readonly enabled = input<boolean>(true, { alias: 'ksLowercase' });

  @HostListener('input')
  onInput(): void {
    if (!this.enabled()) return;

    const inputEl = this.el.nativeElement;
    const start = inputEl.selectionStart;
    const end = inputEl.selectionEnd;

    inputEl.value = inputEl.value.toLowerCase();
    inputEl.setSelectionRange(start, end);
  }
}

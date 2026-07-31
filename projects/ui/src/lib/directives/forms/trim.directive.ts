import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[ksTrim]',
  standalone: true,
})
export class TrimDirective {
  private readonly el = inject(ElementRef<HTMLInputElement>);

  readonly enabled = input<boolean>(true, { alias: 'ksTrim' });

  @HostListener('blur')
  onBlur(): void {
    if (!this.enabled()) return;

    const currentValue = this.el.nativeElement.value;
    if (currentValue) {
      const trimmedValue = currentValue.trim();
      if (currentValue !== trimmedValue) {
        this.el.nativeElement.value = trimmedValue;
        this.el.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  }
}

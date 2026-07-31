import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[ksMaxLength]',
  standalone: true,
})
export class MaxLengthDirective {
  private readonly el = inject(ElementRef<HTMLInputElement | HTMLTextAreaElement>);

  /** Longitud máxima permitida */
  readonly maxLength = input.required<number>({ alias: 'ksMaxLength' });

  @HostListener('input')
  onInput(): void {
    const limit = this.maxLength();
    const current = this.el.nativeElement.value;

    if (current && current.length > limit) {
      this.el.nativeElement.value = current.substring(0, limit);
      this.el.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}

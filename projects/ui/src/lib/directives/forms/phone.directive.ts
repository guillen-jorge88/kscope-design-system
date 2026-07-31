import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[ksPhone]',
  standalone: true,
})
export class PhoneDirective {
  private readonly el = inject(ElementRef<HTMLInputElement>);

  /** Patrón de máscara telefónica donde '0' o '9' representan dígitos */
  readonly maskPattern = input<string>('(000) 000-0000', { alias: 'ksPhone' });

  @HostListener('input')
  onInput(): void {
    const pattern = this.maskPattern();
    const rawDigits = this.el.nativeElement.value.replace(/\D/g, '');
    let formatted = '';
    let digitIndex = 0;

    for (let i = 0; i < pattern.length && digitIndex < rawDigits.length; i++) {
      const maskChar = pattern[i];
      if (maskChar === '0' || maskChar === '9') {
        formatted += rawDigits[digitIndex++];
      } else {
        formatted += maskChar;
      }
    }

    this.el.nativeElement.value = formatted;
  }
}

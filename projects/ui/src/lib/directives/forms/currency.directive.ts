import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[ksCurrency]',
  standalone: true,
})
export class CurrencyDirective {
  private readonly el = inject(ElementRef<HTMLInputElement>);

  /** Código de la moneda ISO 4217 (ej: USD, EUR, COP) */
  readonly currencyCode = input<string>('USD', { alias: 'kscopeCurrency' });

  /** Locale para el formateador Intl */
  readonly locale = input<string>('en-US', { alias: 'kscopeCurrencyLocale' });

  @HostListener('blur')
  onBlur(): void {
    this.formatValue();
  }

  private formatValue(): void {
    const rawValue = this.el.nativeElement.value.replace(/[^0-9.-]+/g, '');
    const numberValue = parseFloat(rawValue);

    if (isNaN(numberValue)) {
      this.el.nativeElement.value = '';
      return;
    }

    const formatter = new Intl.NumberFormat(this.locale(), {
      style: 'currency',
      currency: this.currencyCode(),
    });

    this.el.nativeElement.value = formatter.format(numberValue);
    this.el.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
  }
}

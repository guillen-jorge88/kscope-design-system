import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[ksInputMask]',
  standalone: true,
})
export class InputMaskDirective {
  private readonly el = inject(ElementRef<HTMLInputElement>);

  /**
   * Patrón de máscara a aplicar.
   * Leyenda de comodines:
   *  - '0': Solo dígitos (0-9)
   *  - 'A': Solo letras (a-z, A-Z)
   *  - '*': Cualquier carácter alfanumérico
   *
   * Ejemplo: "0000 0000 0000 0000" para tarjetas de crédito
   * Ejemplo: "00/00/0000" para fechas
   */
  readonly mask = input.required<string>({ alias: 'ksInputMask' });

  @HostListener('input')
  onInput(): void {
    const pattern = this.mask();
    const inputEl = this.el.nativeElement;
    const rawValue = inputEl.value;

    if (!pattern || !rawValue) return;

    let formatted = '';
    let rawIndex = 0;

    // Extraer solo los caracteres válidos según la regla del patrón
    const cleanChars = rawValue.replace(/[^a-zA-Z0-9]/g, '');

    for (let i = 0; i < pattern.length && rawIndex < cleanChars.length; i++) {
      const maskChar = pattern[i];
      const currentChar = cleanChars[rawIndex];

      if (maskChar === '0') {
        if (/^[0-9]$/.test(currentChar)) {
          formatted += currentChar;
          rawIndex++;
        } else {
          rawIndex++;
          i--; // Reintenta la posición actual de la máscara con el siguiente carácter
        }
      } else if (maskChar === 'A') {
        if (/^[a-zA-Z]$/.test(currentChar)) {
          formatted += currentChar;
          rawIndex++;
        } else {
          rawIndex++;
          i--;
        }
      } else if (maskChar === '*') {
        if (/^[a-zA-Z0-9]$/.test(currentChar)) {
          formatted += currentChar;
          rawIndex++;
        } else {
          rawIndex++;
          i--;
        }
      } else {
        // Carácter estático de formato (ej: '/', '-', ' ', '(', ')')
        formatted += maskChar;
        // Si el usuario escribió manualmente el carácter delimitador, avanzamos el índice
        if (currentChar === maskChar) {
          rawIndex++;
        }
      }
    }

    if (inputEl.value !== formatted) {
      inputEl.value = formatted;
      inputEl.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}

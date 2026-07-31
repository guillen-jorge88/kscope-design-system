import { Directive, HostListener, input } from '@angular/core';

@Directive({
  selector: '[ksDecimalOnly]',
  standalone: true,
})
export class DecimalOnlyDirective {
  /** Cantidad máxima de decimales permitidos */
  readonly maxDecimals = input<number>(2, { alias: 'ksMaxDecimals' });

  /** Carácter separador decimal permitido (por defecto punto o coma) */
  readonly decimalSeparator = input<'.' | ','>('.', { alias: 'ksDecimalSeparator' });

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const allowedKeys = [
      'Backspace',
      'Tab',
      'End',
      'Home',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
      'Enter',
    ];

    if (allowedKeys.includes(event.key) || event.ctrlKey || event.metaKey) {
      return;
    }

    const target = event.target as HTMLInputElement;
    const currentValue = target.value || '';
    const separator = this.decimalSeparator();

    // Validar tecla de separador decimal
    if (event.key === separator || (separator === '.' && event.key === ',')) {
      // Si ya existe un separador decimal, prevenimos duplicados
      if (currentValue.includes(separator)) {
        event.preventDefault();
      }
      return;
    }

    // Si no es un dígito, se previene la entrada
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
      return;
    }

    // Validar cantidad de decimales existentes
    if (currentValue.includes(separator)) {
      const parts = currentValue.split(separator);
      const decimalPart = parts[1] || '';

      // Si el cursor está después del separador y ya alcanzamos el límite
      const selectionStart = target.selectionStart ?? 0;
      const separatorIndex = currentValue.indexOf(separator);

      if (selectionStart > separatorIndex && decimalPart.length >= this.maxDecimals()) {
        event.preventDefault();
      }
    }
  }
}

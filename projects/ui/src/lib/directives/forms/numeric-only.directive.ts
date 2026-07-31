import { Directive, HostListener, input } from '@angular/core';

@Directive({
  selector: '[ksNumericOnly]',
  standalone: true,
})
export class NumericOnlyDirective {
  /** Habilita/deshabilita la restricción numérico estricta */
  readonly enabled = input<boolean>(true, { alias: 'ksNumericOnly' });

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.enabled()) return;

    // Permitir teclas especiales de navegación y edición
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

    // Permitir combinaciones de atajos de teclado (Ctrl/Cmd + A, C, V, X, Z)
    if (allowedKeys.includes(event.key) || event.ctrlKey || event.metaKey) {
      return;
    }

    // Bloquear cualquier tecla que no sea un número de 0 a 9
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  }
}

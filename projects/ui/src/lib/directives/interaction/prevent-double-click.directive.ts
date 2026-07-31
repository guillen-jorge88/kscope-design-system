import { Directive, HostListener, input, output } from '@angular/core';

@Directive({
  selector: '[ksPreventDoubleClick]',
  standalone: true,
})
export class PreventDoubleClickDirective {
  /** Tiempo de espera en milisegundos entre clics (por defecto 1000ms) */
  readonly debounceTime = input<number>(1000, { alias: 'ksPreventDoubleClickDelay' });

  /** Evento emitido únicamente cuando el clic es válido */
  readonly ksSingleClick = output<MouseEvent>();

  private isThrottled = false;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.isThrottled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    this.isThrottled = true;
    this.ksSingleClick.emit(event);

    setTimeout(() => {
      this.isThrottled = false;
    }, this.debounceTime());
  }
}

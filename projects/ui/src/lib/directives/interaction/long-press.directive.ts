import { Directive, HostListener, input, output } from '@angular/core';

@Directive({
  selector: '[ksLongPress]',
  standalone: true,
})
export class LongPressDirective {
  /** Duración de presión continua en ms (por defecto 500ms) */
  readonly duration = input<number>(500, { alias: 'ksLongPressDuration' });

  /** Emite el evento cuando se cumple la duración del toque prolongado */
  readonly ksLongPress = output<MouseEvent | TouchEvent>();

  private timeoutId: any = null;

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  onPressStart(event: MouseEvent | TouchEvent): void {
    this.clearTimer();
    this.timeoutId = setTimeout(() => {
      this.ksLongPress.emit(event);
    }, this.duration());
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  @HostListener('touchend')
  @HostListener('touchcancel')
  onPressEnd(): void {
    this.clearTimer();
  }

  private clearTimer(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}

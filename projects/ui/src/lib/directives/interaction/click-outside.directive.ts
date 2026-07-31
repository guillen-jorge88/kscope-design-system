import { Directive, ElementRef, HostListener, inject, input, output } from '@angular/core';

@Directive({
  selector: '[ksClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  private readonly el: ElementRef<HTMLElement> = inject(ElementRef);

  /** Habilita/deshabilita la escucha de clics externos */
  readonly enabled = input<boolean>(true, { alias: 'ksClickOutside' });

  /** Emite evento cuando ocurre un clic fuera del elemento */
  readonly ksClickOutside = output<MouseEvent | TouchEvent>();

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  onDocumentClick(event: MouseEvent | TouchEvent): void {
    if (!this.enabled()) return;

    const target = event.target as Node | null;
    if (target && !this.el.nativeElement.contains(target)) {
      this.ksClickOutside.emit(event);
    }
  }
}

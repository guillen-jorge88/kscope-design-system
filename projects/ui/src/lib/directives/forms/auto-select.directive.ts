import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[ksAutoSelect]',
  standalone: true,
})
export class AutoSelectDirective {
  private readonly el = inject(ElementRef<HTMLInputElement>);

  readonly enabled = input<boolean>(true, { alias: 'ksAutoSelect' });

  @HostListener('focus')
  onFocus(): void {
    if (!this.enabled()) return;

    // Se difiere levemente para evitar conflictos con comportamientos nativos de clic
    setTimeout(() => {
      this.el.nativeElement.select();
    }, 0);
  }
}

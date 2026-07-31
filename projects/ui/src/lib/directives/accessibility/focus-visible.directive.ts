import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ksFocusVisible]',
  standalone: true,
})
export class FocusVisibleDirective {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const navKeys = ['Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'Enter'];
    if (navKeys.includes(event.key)) {
      this.renderer.addClass(this.el.nativeElement, 'ks-focus-visible');
    }
  }

  @HostListener('mousedown')
  onMouseDown(): void {
    this.renderer.removeClass(this.el.nativeElement, 'ks-focus-visible');
  }

  @HostListener('blur')
  onBlur(): void {
    this.renderer.removeClass(this.el.nativeElement, 'ks-focus-visible');
  }
}

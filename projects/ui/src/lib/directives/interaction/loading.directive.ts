import { Directive, ElementRef, HostBinding, inject, input } from '@angular/core';

@Directive({
  selector: '[ksLoading]',
  standalone: true,
})
export class LoadingDirective {
  private readonly el: ElementRef<HTMLElement> = inject(ElementRef);

  /** Indica si el componente está en estado de carga */
  readonly isLoading = input<boolean>(false, { alias: 'ksLoading' });

  @HostBinding('class.ks-is-loading')
  get loadingClass(): boolean {
    return this.isLoading();
  }

  @HostBinding('attr.aria-busy')
  get ariaBusy(): string {
    return String(this.isLoading());
  }

  @HostBinding('style.pointer-events')
  get pointerEvents(): string {
    return this.isLoading() ? 'none' : 'auto';
  }
}

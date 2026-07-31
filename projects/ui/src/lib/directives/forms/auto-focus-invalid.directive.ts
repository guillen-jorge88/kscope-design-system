import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[ksAutoFocusInvalid]',
  standalone: true,
})
export class AutoFocusInvalidDirective {
  // Tipamos la propiedad directamente aquí
  private readonly el: ElementRef<HTMLFormElement> = inject(ElementRef);

  readonly enabled = input<boolean>(true, { alias: 'ksAutoFocusInvalid' });

  @HostListener('submit')
  onSubmit(): void {
    if (!this.enabled()) return;

    // Ahora querySelector está perfectamente tipado como HTMLFormElement
    const invalidControl = this.el.nativeElement.querySelector<HTMLElement>(
      '.ng-invalid:not(form), [aria-invalid="true"]',
    );

    if (invalidControl) {
      invalidControl.focus();
    }
  }
}

import { Directive, HostBinding, input } from '@angular/core';

export type ksAriaLiveMode = 'off' | 'polite' | 'assertive';

@Directive({
  selector: '[ksAriaLive]',
  standalone: true,
})
export class AriaLiveDirective {
  /**
   * 'polite': Espera a que el usuario termine su acción actual para anunciar.
   * 'assertive': Interrumpe al lector de pantalla para anunciar de inmediato (Alertas críticas).
   */
  readonly mode = input<ksAriaLiveMode>('polite', { alias: 'ksAriaLive' });

  @HostBinding('attr.aria-live')
  get ariaLive(): ksAriaLiveMode {
    return this.mode();
  }
}

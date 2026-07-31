import { Directive, HostListener, input, output } from '@angular/core';

export type ksDrawerPosition = 'left' | 'right';

@Directive({
  selector: '[ksDrawerTrigger]',
  standalone: true,
})
export class DrawerDirective {
  /** Posición de apertura deseada */
  readonly position = input<ksDrawerPosition>('right', { alias: 'ksDrawerPosition' });

  /** Emite para solicitar la apertura del panel deslizable */
  readonly toggleDrawer = output<ksDrawerPosition>();

  @HostListener('click')
  onClick(): void {
    this.toggleDrawer.emit(this.position());
  }
}

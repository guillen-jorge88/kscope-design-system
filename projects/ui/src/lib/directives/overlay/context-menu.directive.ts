import { Directive, HostListener, input, output } from '@angular/core';

export interface ksContextMenuPosition {
  x: number;
  y: number;
}

@Directive({
  selector: '[ksContextMenuTrigger]',
  standalone: true,
})
export class ContextMenuDirective {
  /** Habilita/deshabilita el menú contextual */
  readonly enabled = input<boolean>(true, { alias: 'ksContextMenuTrigger' });

  /** Emite coordenadas exactas del clic derecho */
  readonly contextMenuOpened = output<ksContextMenuPosition>();

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent): void {
    if (!this.enabled()) return;

    event.preventDefault();
    this.contextMenuOpened.emit({
      x: event.clientX,
      y: event.clientY
    });
  }
}

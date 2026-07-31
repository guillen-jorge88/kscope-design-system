import { Directive, HostListener, input, output } from '@angular/core';

@Directive({
  selector: '[ksKeyboardShortcut]',
  standalone: true,
})
export class KeyboardShortcutDirective {
  /** Combinación de teclas requeridas en formato "ctrl.k", "escape", "ctrl.shift.enter" */
  readonly shortcut = input.required<string>({ alias: 'ksShortcut' });

  /** Emite evento al presionar la combinación registrada */
  readonly ksShortcutTriggered = output<KeyboardEvent>();

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const targetKeys = this.shortcut().toLowerCase().split('.');

    const keyMatch = targetKeys.includes(event.key.toLowerCase());
    const ctrlMatch = targetKeys.includes('ctrl') ? event.ctrlKey || event.metaKey : true;
    const shiftMatch = targetKeys.includes('shift') ? event.shiftKey : true;
    const altMatch = targetKeys.includes('alt') ? event.altKey : true;

    if (keyMatch && ctrlMatch && shiftMatch && altMatch) {
      event.preventDefault();
      this.ksShortcutTriggered.emit(event);
    }
  }
}

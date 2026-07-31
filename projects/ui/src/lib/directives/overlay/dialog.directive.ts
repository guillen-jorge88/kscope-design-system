import { Directive, HostListener, input, output } from '@angular/core';

@Directive({
  selector: '[ksDialogTrigger]',
})
export class DialogDirective {
  /** ID o identificador del diálogo a abrir */
  readonly dialogId = input.required<string>({ alias: 'ksDialogTrigger' });

  /** Emite evento para solicitar la apertura del diálogo */
  readonly openDialog = output<string>();

  @HostListener('click')
  onClick(): void {
    this.openDialog.emit(this.dialogId());
  }
}

import { Directive, HostListener, input, output } from '@angular/core';

@Directive({
  selector: '[ksHover]',
  standalone: true,
})
export class HoverDirective {
  /** Delay en ms para activar el hover */
  readonly enterDelay = input<number>(0, { alias: 'ksHoverEnterDelay' });

  /** Delay en ms para desactivar el hover */
  readonly leaveDelay = input<number>(0, { alias: 'ksHoverLeaveDelay' });

  /** Emite true en enter y false en leave */
  readonly ksHoverChange = output<boolean>();

  private enterTimeoutId: any = null;
  private leaveTimeoutId: any = null;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.clearLeaveTimeout();
    this.enterTimeoutId = setTimeout(() => {
      this.ksHoverChange.emit(true);
    }, this.enterDelay());
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.clearEnterTimeout();
    this.leaveTimeoutId = setTimeout(() => {
      this.ksHoverChange.emit(false);
    }, this.leaveDelay());
  }

  private clearEnterTimeout(): void {
    if (this.enterTimeoutId) {
      clearTimeout(this.enterTimeoutId);
      this.enterTimeoutId = null;
    }
  }

  private clearLeaveTimeout(): void {
    if (this.leaveTimeoutId) {
      clearTimeout(this.leaveTimeoutId);
      this.leaveTimeoutId = null;
    }
  }
}

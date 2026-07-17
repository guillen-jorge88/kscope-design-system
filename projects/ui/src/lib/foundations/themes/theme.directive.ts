// projects/ui/src/lib/foundations/themes/theme.directive.ts

import { Directive, ElementRef, Input, OnChanges, Renderer2, inject } from '@angular/core';
import { ThemeName, BrandName } from './theme.types';

@Directive({
  selector: '[ksTheme], [ksBrand]',
  standalone: true,
})
export class ThemeDirective implements OnChanges {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @Input() ksTheme?: ThemeName;
  @Input() ksBrand?: BrandName;

  ngOnChanges(): void {
    const nativeEl = this.el.nativeElement;

    if (this.ksTheme) {
      this.renderer.setAttribute(nativeEl, 'data-theme', this.ksTheme);
    }

    if (this.ksBrand) {
      this.renderer.setAttribute(nativeEl, 'data-brand', this.ksBrand);
    }
  }
}

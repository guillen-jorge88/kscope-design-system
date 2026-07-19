// projects/ui/src/lib/atoms/icon/icon.ts
import { Component, ChangeDetectionStrategy, input, inject, computed } from '@angular/core';
import { IconProps } from './icon.interface';
import { IconLibrary } from './icon.types';
import { IconRegistryService } from '../../services/icon/icon-registry.service';
import { classNamesUtils } from '../../utils';
import { ICON_TOKENS } from './icon.tokens';
import { ICON_SELECTOR, DEFAULT_ICON_SIZE, DEFAULT_LIBRARY, DEFAULT_COLOR } from './icon.constants';
import { ComponentSizeT, ColorT } from '../../types';

@Component({
  selector: ICON_SELECTOR,
  standalone: true,
  templateUrl: './icon.html',
  styleUrls: ['./icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements IconProps {
  private readonly registry = inject(IconRegistryService);

  // Inputs basados en Angular Signals que satisfacen la interfaz IconProps
  readonly name = input.required<string>();
  readonly library = input<IconLibrary>(DEFAULT_LIBRARY);
  readonly size = input<ComponentSizeT>(DEFAULT_ICON_SIZE);
  readonly color = input<ColorT>(DEFAULT_COLOR);
  readonly filled = input<boolean>(false);
  readonly rotate = input<number>(0);
  readonly spin = input<boolean>(false);
  readonly ariaLabel = input<string>('');

  // Computación reactiva de estilos e interacción
  readonly iconSize = computed(() => ICON_TOKENS.size[this.size()]);

  readonly rawSvg = computed(() => {
    return this.registry.getIcon(this.library(), this.name()) || '';
  });

  readonly computedClasses = computed(() =>
    classNamesUtils('ks-icon-base', `ks-icon--${this.color()}`, this.spin() && 'ks-icon--spin'),
  );

  readonly computedStyles = computed(() => ({
    transform: this.rotate() ? `rotate(${this.rotate()}deg)` : null,
    width: this.iconSize(),
    height: this.iconSize(),
  }));
}

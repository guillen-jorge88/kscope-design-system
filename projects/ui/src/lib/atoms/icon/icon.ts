// projects/ui/src/lib/atoms/icon/icon.component.ts
import { ChangeDetectionStrategy, Component, computed, HostBinding, input } from '@angular/core';
import { IconProps } from './models/icon.interface';
import { ICON_TOKENS } from './models/icon.tokens';
import { IconLibrary } from './models/icon.types';
import { ColorT, ComponentSizeT } from '../../types';
import {
  DEFAULT_COLOR,
  DEFAULT_ICON_SIZE,
  DEFAULT_LIBRARY,
  ICON_SELECTOR,
} from './models/icon.constants';

@Component({
  selector: ICON_SELECTOR,
  standalone: true,
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon implements IconProps {
  /** Nombre del icono (requerido) */
  readonly name = input.required<string>();

  /** Librería de icono a utilizar */
  readonly library = input<IconLibrary>(DEFAULT_LIBRARY);

  /** Tamaño del icono según tokens semánticos o valor genérico */
  readonly size = input<ComponentSizeT>(DEFAULT_ICON_SIZE);

  /** Token de color semántico */
  readonly color = input<ColorT>(DEFAULT_COLOR);

  /** Relleno visual del icono */
  readonly filled = input<boolean>(false);

  /** Grados de rotación manual (0, 90, 180, 270) */
  readonly rotate = input<number>(0);

  /** Animación de giro continuo */
  readonly spin = input<boolean>(false);

  /** Accesibilidad: Etiqueta descriptiva para lectores de pantalla */
  readonly ariaLabel = input<string>('');

  /** Estilo CSS computado para rotación */
  protected readonly transformStyle = computed(() => {
    const deg = this.rotate();
    return deg ? `rotate(${deg}deg)` : 'none';
  });

  /** Binding dinámico a la propiedad CSS de tamaño */
  @HostBinding('style.--ks-icon-size')
  protected get hostSize(): string {
    const sizeKey = this.size() as keyof typeof ICON_TOKENS.size;
    return ICON_TOKENS.size[sizeKey] ?? this.size();
  }

  /** Binding dinámico al color token */
  @HostBinding('style.--ks-icon-color')
  protected get hostColor(): string {
    const colorKey = this.color();
    return `var(--ks-color-${colorKey}, currentColor)`;
  }
}

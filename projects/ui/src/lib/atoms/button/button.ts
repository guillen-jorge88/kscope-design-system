import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';
import { ButtonProps } from './models/button.interface';
import {
  BUTTON_SELECTOR,
  DEFAULT_BUTTON_COLOR,
  DEFAULT_BUTTON_SHAPE,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_TYPE,
  DEFAULT_BUTTON_VARIANT,
} from './models/button.constants';
import { ButtonShape, ButtonType, ButtonVariant } from './models/button.types';
import { ColorT, ComponentSizeT } from '../../types';
import { BUTTON_TOKENS } from './models/button.tokens';

@Component({
  selector: BUTTON_SELECTOR,
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button implements ButtonProps {
  /** Estilo visual principal */
  readonly variant = input<ButtonVariant>(DEFAULT_BUTTON_VARIANT);

  /** Tamaño del botón */
  readonly size = input<ComponentSizeT>(DEFAULT_BUTTON_SIZE);

  /** Token de color semántico */
  readonly color = input<ColorT>(DEFAULT_BUTTON_COLOR);

  /** Atributo tipo del botón HTML nativo */
  readonly type = input<ButtonType>(DEFAULT_BUTTON_TYPE);

  /** Forma del borde */
  readonly shape = input<ButtonShape>(DEFAULT_BUTTON_SHAPE);

  /** Estado deshabilitado */
  readonly disabled = input<boolean>(false);

  /** Estado de carga (muestra spinner) */
  readonly loading = input<boolean>(false);

  /** Ocupa el 100% del ancho del contenedor */
  readonly fullWidth = input<boolean>(false);

  /** Icono opcional a la izquierda */
  readonly leftIcon = input<string>('');

  /** Icono opcional a la derecha */
  readonly rightIcon = input<string>('');

  /** Etiqueta de accesibilidad */
  readonly ariaLabel = input<string>('');

  @HostBinding('class.ks-button-host--full-width')
  protected get isFullWidth(): boolean {
    return this.fullWidth();
  }

  @HostBinding('style.--ks-button-height')
  protected get hostHeight(): string {
    const sizeKey = this.size() as keyof typeof BUTTON_TOKENS.size;
    return BUTTON_TOKENS.size[sizeKey]?.height ?? '40px';
  }

  @HostBinding('style.--ks-button-padding')
  protected get hostPadding(): string {
    const sizeKey = this.size() as keyof typeof BUTTON_TOKENS.size;
    return BUTTON_TOKENS.size[sizeKey]?.padding ?? '0 16px';
  }

  @HostBinding('style.--ks-button-font-size')
  protected get hostFontSize(): string {
    const sizeKey = this.size() as keyof typeof BUTTON_TOKENS.size;
    return BUTTON_TOKENS.size[sizeKey]?.fontSize ?? '14px';
  }

  @HostBinding('style.--ks-button-gap')
  protected get hostGap(): string {
    const sizeKey = this.size() as keyof typeof BUTTON_TOKENS.size;
    return BUTTON_TOKENS.size[sizeKey]?.gap ?? '8px';
  }

  @HostBinding('style.--ks-button-radius')
  protected get hostRadius(): string {
    const shapeKey = this.shape() as keyof typeof BUTTON_TOKENS.radius;
    return BUTTON_TOKENS.radius[shapeKey] ?? '6px';
  }

  @HostBinding('style.--ks-button-bg')
  protected get hostBg(): string {
    return `var(--ks-color-${this.color()}, #1e40af)`;
  }

  @HostBinding('style.--ks-button-text-color')
  protected get hostTextColor(): string {
    if (this.variant() === 'solid') {
      return '#ffffff';
    }
    return `var(--ks-color-${this.color()}, #1e40af)`;
  }
}

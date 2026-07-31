import { ChangeDetectionStrategy, Component, HostBinding, input, InputSignalWithTransform } from '@angular/core';
import {
  DEFAULT_LABEL_ALIGNMENT,
  DEFAULT_LABEL_COLOR,
  DEFAULT_LABEL_SIZE,
  DEFAULT_LABEL_WEIGHT,
  LABEL_SELECTOR,
} from './models/label.constants';
import { LabelProps } from './models/label.interface';
import { ComponentSizeT, ColorT } from '../../types';
import { LabelWeight, LabelAlignment } from './models/label.types';
import { LABEL_TOKENS } from './models/label.tokens';

@Component({
  selector: LABEL_SELECTOR,
  standalone: true,
  imports: [],
  templateUrl: './label.html',
  styleUrl: './label.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Label implements LabelProps {
  /** ID del control de formulario asociado (`htmlFor`) */
  readonly forId = input<string>('', { alias: 'for' });

  /** Indica si el campo es obligatorio (agrega el asterisco rojo) */
  readonly required = input<boolean>(false);

  /** Estado deshabilitado visual */
  readonly disabled = input<boolean>(false);

  /** Tamaño tipográfico semántico */
  readonly size = input<ComponentSizeT>(DEFAULT_LABEL_SIZE);

  /** Token de color semántico */
  readonly color = input<ColorT>(DEFAULT_LABEL_COLOR);

  /** Peso tipográfico */
  readonly weight = input<LabelWeight>(DEFAULT_LABEL_WEIGHT);

  /** Alineación del texto */
  readonly align = input<LabelAlignment>(DEFAULT_LABEL_ALIGNMENT);

  /** Binding dinámico de tamaño */
  @HostBinding('style.--ks-label-size')
  protected get hostSize(): string {
    const sizeKey = this.size() as keyof typeof LABEL_TOKENS.size;
    return LABEL_TOKENS.size[sizeKey] ?? this.size();
  }

  /** Binding dinámico de peso tipográfico */
  @HostBinding('style.--ks-label-weight')
  protected get hostWeight(): string {
    const weightKey = this.weight() as keyof typeof LABEL_TOKENS.weight;
    return LABEL_TOKENS.weight[weightKey] ?? '500';
  }

  /** Binding dinámico de color semántico */
  @HostBinding('style.--ks-label-color')
  protected get hostColor(): string {
    const colorKey = this.color();
    return `var(--ks-color-${colorKey}, currentColor)`;
  }

  /** Binding dinámico de alineación */
  @HostBinding('style.--ks-label-align')
  protected get hostAlign(): string {
    return this.align();
  }
}

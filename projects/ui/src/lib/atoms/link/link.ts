import { ChangeDetectionStrategy, Component, computed, HostBinding, input } from '@angular/core';
import {
  DEFAULT_LINK_COLOR,
  DEFAULT_LINK_SIZE,
  DEFAULT_LINK_TARGET,
  DEFAULT_LINK_UNDERLINE,
  DEFAULT_LINK_WEIGHT,
  LINK_SELECTOR,
} from './models/link.constants';
import { IconComponent } from '../icon/icon';
import { LinkProps } from './models/link.interface';
import { LinkTarget, LinkUnderline, LinkWeight } from './models/link.types';
import { ColorT, ComponentSizeT } from '../../types';
import { LINK_TOKENS } from './models/link.tokens';

@Component({
  selector: LINK_SELECTOR,
  standalone: true,
  imports: [IconComponent],
  templateUrl: './link.html',
  styleUrl: './link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Link implements LinkProps {
  /** URL destino del enlace */
  readonly href = input<string>('');

  /** Atributo target nativo (`_self`, `_blank`, etc.) */
  readonly target = input<LinkTarget>(DEFAULT_LINK_TARGET);

  /** Tamaño tipográfico semántico */
  readonly size = input<ComponentSizeT>(DEFAULT_LINK_SIZE);

  /** Token de color semántico */
  readonly color = input<ColorT>(DEFAULT_LINK_COLOR);

  /** Comportamiento del subrayado */
  readonly underline = input<LinkUnderline>(DEFAULT_LINK_UNDERLINE);

  /** Peso de la fuente */
  readonly weight = input<LinkWeight>(DEFAULT_LINK_WEIGHT);

  /** Estado deshabilitado */
  readonly disabled = input<boolean>(false);

  /** Si es verdadero, abre en nueva pestaña y agrega un icono visual externo */
  readonly external = input<boolean>(false);

  /** Icono a la izquierda */
  readonly leftIcon = input<string>('');

  /** Icono a la derecha */
  readonly rightIcon = input<string>('');

  /** Etiqueta para accesibilidad */
  readonly ariaLabel = input<string>('');

  /** Atributo rel seguro computado dinámicamente */
  protected readonly computedRel = computed(() => {
    if (this.target() === '_blank' || this.external()) {
      return 'noopener noreferrer';
    }
    return null;
  });

  @HostBinding('style.--ks-link-size')
  protected get hostSize(): string {
    const sizeKey = this.size() as keyof typeof LINK_TOKENS.size;
    return LINK_TOKENS.size[sizeKey] ?? this.size();
  }

  @HostBinding('style.--ks-link-weight')
  protected get hostWeight(): string {
    const weightKey = this.weight() as keyof typeof LINK_TOKENS.weight;
    return LINK_TOKENS.weight[weightKey] ?? '500';
  }

  @HostBinding('style.--ks-link-color')
  protected get hostColor(): string {
    return `var(--ks-color-${this.color()}, currentColor)`;
  }
}

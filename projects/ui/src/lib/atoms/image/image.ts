// projects/ui/src/lib/atoms/image/image.component.ts

import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
  output,
  signal,
} from '@angular/core';
import { IconComponent } from '../icon/icon';
import {
  DEFAULT_FALLBACK_ICON,
  DEFAULT_IMAGE_ASPECT_RATIO,
  DEFAULT_IMAGE_FIT,
  DEFAULT_IMAGE_LOADING,
  DEFAULT_IMAGE_RADIUS,
  IMAGE_SELECTOR,
} from './models/image.constants';
import { ImageProps } from './models/image.interface';
import { ImageAspectRatio, ImageLoading, ImageObjectFit, ImageRadius } from './models/image.types';
import { IMAGE_TOKENS } from './models/image.tokens';

@Component({
  selector: IMAGE_SELECTOR,
  standalone: true,
  imports: [IconComponent],
  templateUrl: './image.html',
  styleUrl: './image.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent implements ImageProps {
  /** URL de la imagen principal (requerido) */
  readonly src = input.required<string>();

  /** Texto alternativo para accesibilidad (requerido) */
  readonly alt = input.required<string>();

  /** Ajuste de la imagen dentro del contenedor (`object-fit`) */
  readonly fit = input<ImageObjectFit>(DEFAULT_IMAGE_FIT);

  /** Relación de aspecto (`aspect-ratio`) */
  readonly aspectRatio = input<ImageAspectRatio>(DEFAULT_IMAGE_ASPECT_RATIO);

  /** Radio de borde */
  readonly radius = input<ImageRadius>(DEFAULT_IMAGE_RADIUS);

  /** Estrategia de carga nativa del navegador */
  readonly loading = input<ImageLoading>(DEFAULT_IMAGE_LOADING);

  /** URL alternativa si falla la carga de la imagen original */
  readonly fallbackSrc = input<string>('');

  /** Icono a mostrar si no hay fallbackSrc o si este también falla */
  readonly fallbackIcon = input<string>(DEFAULT_FALLBACK_ICON);

  /** Emitido al completar la carga exitosa */
  readonly loaded = output<Event>();

  /** Emitido si ocurre un error al cargar la imagen */
  readonly error = output<Event>();

  /** Estado interno reactivo de carga */
  protected readonly isLoading = signal<boolean>(true);

  /** Estado interno reactivo de error */
  protected readonly hasError = signal<boolean>(false);

  /** URL activa que se está intentando renderizar */
  protected readonly currentSrc = signal<string>('');

  constructor() {
    // Sincronizar URL inicial cuando la entrada cambie
    this.currentSrc.set(this.src());
  }

  protected onLoad(event: Event): void {
    this.isLoading.set(false);
    this.loaded.emit(event);
  }

  protected onError(event: Event): void {
    this.isLoading.set(false);

    // Si teníamos una URL alternativa y no la estábamos usando, la probamos
    if (this.fallbackSrc() && this.currentSrc() !== this.fallbackSrc()) {
      this.currentSrc.set(this.fallbackSrc());
    } else {
      // Si ya falló la fallback o no había, activamos el estado de error
      this.hasError.set(true);
      this.error.emit(event);
    }
  }

  @HostBinding('style.--ks-image-fit')
  protected get hostFit(): string {
    return this.fit();
  }

  @HostBinding('style.--ks-image-aspect-ratio')
  protected get hostAspectRatio(): string {
    return this.aspectRatio();
  }

  @HostBinding('style.--ks-image-radius')
  protected get hostRadius(): string {
    const radiusKey = this.radius() as keyof typeof IMAGE_TOKENS.radius;
    return IMAGE_TOKENS.radius[radiusKey] ?? this.radius();
  }
}

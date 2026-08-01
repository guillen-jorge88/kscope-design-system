// projects/ui/src/lib/atoms/image/models/image.interface.ts

import { InputSignal, InputSignalWithTransform, OutputEmitterRef } from '@angular/core';
import { ImageObjectFit, ImageAspectRatio, ImageRadius, ImageLoading } from './image.types';

export interface ImageProps {
  src: InputSignal<string>;
  alt: InputSignal<string>;
  fit: InputSignalWithTransform<ImageObjectFit, ImageObjectFit>;
  aspectRatio: InputSignalWithTransform<ImageAspectRatio, ImageAspectRatio>;
  radius: InputSignalWithTransform<ImageRadius, ImageRadius>;
  loading: InputSignalWithTransform<ImageLoading, ImageLoading>;
  fallbackSrc: InputSignalWithTransform<string, string>;
  fallbackIcon: InputSignalWithTransform<string, string>;

  // Outputs mediante Signals (v17.3+)
  loaded: OutputEmitterRef<Event>;
  error: OutputEmitterRef<Event>;
}

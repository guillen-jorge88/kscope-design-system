// projects/ui/src/lib/foundations/themes/theme.service.ts

import { Injectable, signal } from '@angular/core';
import { ThemeName, BrandName } from './theme.types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Signals para lectura reactiva dentro de los componentes Angular
  readonly currentTheme = signal<ThemeName>('light');
  readonly currentBrand = signal<BrandName>('default');

  constructor() {
    // Inicializa leyendo el estado persistido o por defecto en el DOM
    const initialTheme = (document.documentElement.getAttribute('data-theme') ??
      'light') as ThemeName;
    const initialBrand = (document.documentElement.getAttribute('data-brand') ??
      'default') as BrandName;

    this.setTheme(initialTheme);
    this.setBrand(initialBrand);
  }

  setTheme(theme: ThemeName): void {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme.set(theme);
  }

  getTheme(): ThemeName {
    return this.currentTheme();
  }

  setBrand(brand: BrandName): void {
    document.documentElement.setAttribute('data-brand', brand);
    this.currentBrand.set(brand);
  }

  getBrand(): BrandName {
    return this.currentBrand();
  }
}

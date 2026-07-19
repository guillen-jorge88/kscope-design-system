// projects/ui/src/lib/services/icon/icon-registry.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  // Almacén seguro indexado por biblioteca y nombre del icono
  private registry = new Map<string, string>();

  /**
   * Registra un mapa de iconos en el sistema
   * @param library Nombre de la librería ('custom', 'material', etc.)
   * @param icons Objeto clave-valor con el nombre y el contenido SVG puro
   */
  registerIcons(library: string, icons: Record<string, string>): void {
    Object.entries(icons).forEach(([name, svgContent]) => {
      this.registry.set(`${library}:${name}`, svgContent);
    });
  }

  /**
   * Obtiene el contenido SVG almacenado
   */
  getIcon(library: string, name: string): string | null {
    return this.registry.get(`${library}:${name}`) || null;
  }
}

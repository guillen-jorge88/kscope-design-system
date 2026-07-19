# Pure Utility Module 🛠️

Este directorio almacena exclusivamente **funciones puras** de TypeScript. Actúa como el motor lógico utilitario transversal para componentes y directivas de **Kaleidoscope UI**.

## 🛑 Reglas Inquebrantables de Pureza

Para garantizar el soporte nativo de **Tree Shaking** y evitar inflar el bundle compilado, cualquier archivo agregado a este submódulo debe cumplir las siguientes directrices:

1. **Sin Inyección de Angular**: Está prohibido el uso de `inject()`, decoradores `@Injectable()` o tokens de inyección.
2. **Sin Manipulación Impura del DOM**: No se permite importar o usar `Renderer2`, `ElementRef` o interactuar directamente con objetos globales en el cuerpo del archivo si esto rompe el renderizado en entornos de servidor (SSR / Angular Universal).
3. **Funciones Deterministas**: A ser posible, dada una misma entrada, la función debe retornar siempre la misma salida sin alterar variables globales externas.

---

## 💡 Ejemplos Clave de Consumo Técnico

### 1. Control de Visibilidad y Clases Dinámicas con `classNames`

```typescript
import { Component, Input } from '@angular/core';
import { classNames } from '@kscope/ui/utils';

@Component({
  selector: 'ks-badge',
  template: `<span [className]="computedClasses">New</span>`,
})
export class BadgeComponent {
  @Input() variant: 'solid' | 'flat' = 'solid';
  @Input() disabled = false;

  get computedClasses() {
    return classNames(
      'ks-badge-base',
      `ks-badge--${this.variant}`,
      this.disabled && 'ks-badge--disabled',
    );
  }
}
```

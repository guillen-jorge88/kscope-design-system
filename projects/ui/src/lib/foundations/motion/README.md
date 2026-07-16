# Motion Foundation 🎬

El módulo de **Motion** define las pautas de tiempo, curvas físicas y comportamientos de transición de **Kaleidoscope UI**. Su propósito es dar fluidez y contexto espacial a las interacciones de los usuarios, logrando una interfaz orgánica y predecible.

---

## 📐 Escala de Tiempos y Curvas

### 1. Escala de Duraciones

| Token     | Valor (ms) | Uso Típico                                                  |
| :-------- | :--------: | :---------------------------------------------------------- |
| `instant` |   `0ms`    | Cambios inmediatos sin animación de transición              |
| `fastest` |   `75ms`   | Ondas de pulsación (Ripples), efectos hover ultra-reactivos |
| `faster`  |  `100ms`   | Rotación y cambios de estado en iconos compactos            |
| `fast`    |  `150ms`   | Botones, interruptores (switches) y elementos pequeños      |
| `normal`  |  `200ms`   | Inputs de formularios, dropdowns de tamaño medio            |
| `slow`    |  `300ms`   | Paneles colapsables (Accordions), tarjetas medianas         |
| `slower`  |  `500ms`   | Menús de navegación extensos                                |
| `slowest` |  `700ms`   | Pantallas de carga completas, transiciones de vistas        |

---

### 2. Curvas de Aceleración (Easings)

- `linear`: Cambios constantes sin aceleración natural.
- `ease`: Transición suave por defecto del navegador.
- `easeIn`: Aceleración abrupta al final (Ideal para elementos que **salen** de la pantalla).
- `easeOut`: Desaceleración suave (Ideal para elementos que **entran** a la pantalla).
- `easeInOut`: Curva balanceada de entrada y salida.
- `emphasized`: Curva personalizada de alta elasticidad para llamar la atención del usuario en componentes clave.

---

### 3. Tokens Semánticos de Componentes

Para asegurar una experiencia de usuario consistente, los componentes utilizan transiciones semánticas mapeadas que abstraen la lógica matemática y de tiempo:

- `--ks-transition-hover` ➔ `all var(--ks-duration-fast) var(--ks-easing-standard)`
- `--ks-transition-focus` ➔ `all var(--ks-duration-fast) var(--ks-easing-standard)`
- `--ks-transition-expand` ➔ `all var(--ks-duration-normal) var(--ks-easing-standard)`
- `--ks-transition-collapse` ➔ `all var(--ks-duration-normal) var(--ks-easing-standard)`
- `--ks-transition-dialog-open` ➔ `all var(--ks-duration-slow) var(--ks-easing-standard)`
- `--ks-transition-dialog-close` ➔ `all var(--ks-duration-fast) var(--ks-easing-standard)`

---

## 💻 Ejemplos de Implementación

### En estilos SCSS locales de componentes

Utiliza las propiedades del módulo en tus hojas de estilo locales de forma semántica:

```scss
// projects/ui/src/lib/components/button/button.component.scss

:host {
  background-color: var(--ks-color-primary);
  transition: var(--ks-transition-hover); // Aplica comportamiento de hover estándar

  &:hover {
    background-color: var(--ks-color-primary-hover);
  }
}
```

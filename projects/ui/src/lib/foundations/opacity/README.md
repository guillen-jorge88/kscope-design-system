# Opacity Foundation 👁️

El módulo de **Opacity** unifica el control de transparencia y la visibilidad de estados interactivos en **Kaleidoscope UI**. Al mapear escalas físicas hacia abstracciones semánticas, evitamos que los componentes utilicen valores numéricos mágicos en sus estilos.

---

## 📊 Escala de Opacidades y Casos de Uso

| Token         | Valor  | Uso de Intención Común                                              |
| :------------ | :----: | :------------------------------------------------------------------ |
| `transparent` |  `0`   | Elementos ocultos, estados iniciales de transición                  |
| `disabled`    | `0.38` | Componentes deshabilitados (botones, inputs, toggles)               |
| `subtle`      | `0.64` | Elementos decorativos secundarios, Skeletons de carga, Placeholders |
| `medium`      | `0.72` | Iconos secundarios, subtítulos de baja jerarquía visual             |
| `visible`     | `0.88` | Fondos de overlays, modales ligeros, tooltips                       |
| `solid`       |  `1`   | Estado normal y completamente opaco                                 |

---

## 💻 Ejemplos de Implementación

### En estilos SCSS de Componentes

Recomendamos priorizar el uso de las variables CSS semánticas para ligar el elemento a su significado real dentro del sistema:

```scss
// projects/ui/src/lib/components/input/input.component.scss

::placeholder {
  color: var(--ks-color-text-muted);
  opacity: var(--ks-opacity-placeholder); // Consumo semántico nativo
}
```

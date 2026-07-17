# Spacing Foundation 📐

La escala de espaciados de **Kaleidoscope UI** está basada en incrementos de **4px**, la cual es el estándar en sistemas de diseño modernos por su flexibilidad y consistencia visual en paddings, margins y gaps.

---

## 📐 Escala de Tokens

| Token | Valor (rem) | Equivalencia Px |
| :---: | :---------: | :-------------: |
|   0   |      0      |       0px       |
|   1   |   0.25rem   |       4px       |
|   2   |   0.50rem   |       8px       |
|   3   |   0.75rem   |      12px       |
|   4   |   1.00rem   |      16px       |
|   5   |   1.25rem   |      20px       |
|   6   |   1.50rem   |      24px       |
|   8   |   2.00rem   |      32px       |
|  10   |   2.50rem   |      40px       |
|  12   |   3.00rem   |      48px       |
|  16   |   4.00rem   |      64px       |
|  20   |   5.00rem   |      80px       |
|  24   |   6.00rem   |      96px       |

---

## 💻 Uso e Implementación

### En hojas de estilo SCSS locales de Componentes

Utiliza los mixins provistos por la librería para mantener tus estilos declarativos y limpios de sintaxis `var(...)`:

```scss
@import '@kscope/ui/foundations/spacing';

.ks-card {
  @include padding(4); // Aplica 16px de relleno interno (padding)
  @include margin(2); // Aplica 8px de margen externo (margin)
}

.ks-stack {
  display: flex;
  flex-direction: column;
  @include gap(3); // Aplica 12px de separación (gap)
}
```

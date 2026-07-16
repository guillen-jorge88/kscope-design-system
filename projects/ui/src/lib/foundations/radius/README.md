# Radius Foundation 📐

El módulo de **Radius** define las directrices y tokens para el redondeado de esquinas de componentes dentro de **Kaleidoscope UI**. La escala se basa en valores semánticos que van desde esquinas completamente cuadradas hasta formas perfectamente redondeadas (píldoras).

---

## 📐 Escala Base y Tokens de Componentes

### 1. Escala Base de Radios

| Token  | Valor (rem) | Equivalente Px | Uso Típico                                         |
| :----: | :---------: | :------------: | :------------------------------------------------- |
| `none` |      0      |      0px       | Divisores rígidos, layouts a pantalla completa     |
|  `xs`  |  0.125rem   |      2px       | Chips compactos, bordes de inputs pequeños         |
|  `sm`  |   0.25rem   |      4px       | Inputs de formularios, tooltips compactos          |
|  `md`  |   0.50rem   |      8px       | Botones, Alertas, Dropdowns                        |
|  `lg`  |   0.75rem   |      12px      | Tarjetas (Cards), Menús contextuales flotantes     |
|  `xl`  |   1.00rem   |      16px      | Modales, Popovers grandes, contenedores destacados |
| `2xl`  |   1.50rem   |      24px      | Paneles promocionales o banners                    |
| `full` |   9999px    |     9999px     | Avatares, Badges, Botones tipo píldora (Pills)     |

---

### 2. Mapeo Semántico por Componentes

Para asegurar un mantenimiento simple, los componentes usan variables semánticas específicas que apuntan internamente a la escala base:

- `--ks-radius-button` ➔ `var(--ks-radius-md)`
- `--ks-radius-input` ➔ `var(--ks-radius-md)`
- `--ks-radius-card` ➔ `var(--ks-radius-lg)`
- `--ks-radius-modal` ➔ `var(--ks-radius-xl)`
- `--ks-radius-avatar` ➔ `var(--ks-radius-full)`
- `--ks-radius-badge` ➔ `var(--ks-radius-full)`

---

## 💻 Ejemplos de Implementación

### En hojas de estilo SCSS locales de componentes

Consume directamente las variables semánticas del componente en su archivo `.scss` asociado:

```scss
// projects/ui/src/lib/components/button/button.component.scss

:host {
  border-radius: var(--ks-radius-button); // Utiliza el token semántico del componente
}
```

# Elevation Foundation 📐

El módulo de **Elevation** gestiona la profundidad visual y el eje Z de los elementos en **Kaleidoscope UI**. Su propósito no es simplemente pintar sombras estáticas, sino estructurar de forma jerárquica las capas visuales de la aplicación siguiendo un mapeo lógico.

---

## 📐 Niveles y Mapeo Semántico

### 1. Niveles Físicos de Sombra

| Nivel | Box Shadow CSS                | Uso Típico                                        |
| :---: | :---------------------------- | :------------------------------------------------ |
|   0   | `none`                        | Componentes planos, estados inactivos, dividers   |
|   1   | `0 1px 2px rgba(0,0,0,.05)`   | Botones estándar, interacciones sutiles           |
|   2   | `0 2px 4px rgba(0,0,0,.08)`   | Tarjetas (Cards), estados de hover sutiles        |
|   3   | `0 4px 8px rgba(0,0,0,.10)`   | Menús desplegables (Dropdowns)                    |
|   4   | `0 8px 16px rgba(0,0,0,.12)`  | Popovers, Tooltips flotantes grandes              |
|   5   | `0 12px 24px rgba(0,0,0,.15)` | Diálogos de alerta, Modales de confirmación       |
|   6   | `0 16px 32px rgba(0,0,0,.18)` | Overlays globales, Drawers laterales persistentes |

---

### 2. Tokens Semánticos de Componentes

Los componentes no consumen los niveles numéricos crudos directos de forma habitual. En su lugar, utilizan tokens semánticos específicos ligados a las propiedades CSS:

- `--ks-elevation-button` ➔ `var(--ks-shadow-1)`
- `--ks-elevation-card` ➔ `var(--ks-shadow-2)`
- `--ks-elevation-dropdown` ➔ `var(--ks-shadow-3)`
- `--ks-elevation-popover` ➔ `var(--ks-shadow-4)`
- `--ks-elevation-dialog` ➔ `var(--ks-shadow-5)`
- `--ks-elevation-drawer` ➔ `var(--ks-shadow-6)`

---

## 💻 Ejemplos de Uso

### En archivos SCSS de Componentes

Asocia directamente las propiedades personalizadas en tus componentes CSS locales para una integración semántica excelente:

```scss
// projects/ui/src/lib/components/card/card.component.scss

:host {
  background-color: var(--ks-color-surface-container);
  border-radius: var(--ks-radius-card);
  box-shadow: var(--ks-elevation-card); // Consumo semántico nativo
}
```

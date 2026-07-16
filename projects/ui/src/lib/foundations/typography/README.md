# Typography Foundation ✍️

El sistema tipográfico de **Kaleidoscope UI** se fundamenta en la especificación taxonómica de **Material Design 3 (M3)**. Esto nos proporciona una jerarquía de clases de texto predefinidas, consistentes y escalables, eliminando la ambigüedad al momento de diseñar interfaces.

---

## 📐 Especificación de la Escala Tipográfica (M3-Adapted)

| Rol          | Variante | Tamaño (rem / px) | Peso (Weight)  | Altura de Línea (Line Height) |
| :----------- | :------- | :---------------- | :------------- | :---------------------------- |
| **Display**  | Large    | `3.5rem` (56px)   | Bold (700)     | 1.2 (`LINE_HEIGHTS.sm`)       |
|              | Medium   | `2.75rem` (44px)  | Bold (700)     | 1.2 (`LINE_HEIGHTS.sm`)       |
|              | Small    | `2.25rem` (36px)  | Bold (700)     | 1.2 (`LINE_HEIGHTS.sm`)       |
| **Headline** | Large    | `1.75rem` (28px)  | Semibold (600) | 1.25 (`LINE_HEIGHTS.md`)      |
|              | Medium   | `1.5rem` (24px)   | Semibold (600) | 1.25 (`LINE_HEIGHTS.md`)      |
|              | Small    | `1.25rem` (20px)  | Semibold (600) | 1.25 (`LINE_HEIGHTS.md`)      |
| **Title**    | Large    | `1.125rem` (18px) | Medium (500)   | 1.4 (`LINE_HEIGHTS.lg`)       |
|              | Medium   | `1rem` (16px)     | Medium (500)   | 1.4 (`LINE_HEIGHTS.lg`)       |
|              | Small    | `0.875rem` (14px) | Medium (500)   | 1.4 (`LINE_HEIGHTS.lg`)       |
| **Body**     | Large    | `1rem` (16px)     | Regular (400)  | 1.5 (`LINE_HEIGHTS.xl`)       |
|              | Medium   | `0.875rem` (14px) | Regular (400)  | 1.5 (`LINE_HEIGHTS.xl`)       |
|              | Small    | `0.75rem` (12px)  | Regular (400)  | 1.5 (`LINE_HEIGHTS.xl`)       |
| **Label**    | Large    | `0.875rem` (14px) | Semibold (600) | 1.0 (`LINE_HEIGHTS.xs`)       |
|              | Medium   | `0.75rem` (12px)  | Semibold (600) | 1.0 (`LINE_HEIGHTS.xs`)       |
|              | Small    | `0.625rem` (10px) | Semibold (600) | 1.0 (`LINE_HEIGHTS.xs`)       |

---

## 💻 Uso e Implementación

### En hojas de estilo SCSS locales de Componentes

Para aplicar estilos semánticos estructurados y limpios a tus componentes, importa el index de tipografía y utiliza los `@include`:

```scss
@import '@kscope/ui/foundations/typography';

.custom-card-title {
  @include ks-title-large;
  color: var(--ks-text-primary);
}

.custom-card-description {
  @include ks-body-medium;
  color: var(--ks-text-secondary);
}
```

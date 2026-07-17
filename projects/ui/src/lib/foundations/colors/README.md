# Colors Foundation 🎨

El sistema de color de **Kaleidoscope UI** está estructurado bajo una arquitectura híbrida en tres capas. Esto permite tener un tipado estricto en TypeScript para la lógica de componentes de Angular, y variables nativas de CSS/SCSS para el motor de estilos, garantizando un soporte nativo y limpio para el cambio dinámico de temas (Light y Dark Mode).

---

## 📐 Estructura de la Capa de Color

*   **Brand Colors (`brand.ts` / `_brand.scss`):** Colores identitarios puros de la marca (Primary, Secondary, Success, etc.). No contienen escalas.
*   **Palette Colors (`palette.ts` / `_palette.scss`):** Rampas tonales completas generadas a partir de los colores de la marca en escalas de `50` a `900`.
*   **Semantic Colors (`semantic.ts` / `_semantic.scss`):** Abstracción funcional de los colores (ej. `text.primary`, `background.primary`). **Esta es la única capa que deben consumir los componentes.**
*   **CSS Variables (`_css-variables.scss`):** Publicación en el `:root` de variables CSS nativas que cambian dinámicamente según el atributo `data-theme="dark"`.

---

## 🎨 Especificación de Tokens

### 1. Brand Colors
Colores raíz de la identidad corporativa:

| Token | Hex | Propósito |
| :--- | :--- | :--- |
| `primary` | `#0052CC` | Color de marca e interacciones principales |
| `secondary` | `#5E6C84` | Elementos de soporte y UI secundaria |
| `success` | `#36B37E` | Confirmaciones y estados positivos |
| `warning` | `#FFAB00` | Alertas y estados preventivos |
| `danger` | `#DE350B` | Errores y estados críticos |
| `info` | `#0065FF` | Mensajes informativos y de ayuda |

### 2. Semantic Colors (Ejemplos de Mapeo)
Los componentes **nunca** deben apuntar a `PRIMARY[500]` directamente. Deben consumir tokens semánticos:

```typescript
// Correcto ✅
const textColor = SEMANTIC_COLORS.text.primary;

// Incorrecto ❌
const textColor = PRIMARY[900];
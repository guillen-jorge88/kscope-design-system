# 📝 Textarea Atom (`ks-textarea`)

El átomo **Textarea** (`<ks-textarea>`) permite la entrada de texto multilínea en **Kscope UI**. Ofrece integración nativa con Angular Reactive Forms (`formControlName`), contador automático de caracteres, control de propiedad `resize` y estados de validación.

---

## 🛠️ API del Componente

### Inputs

| Input                | Tipo              | Defecto      | Descripción                                            |
| :------------------- | :---------------- | :----------- | :----------------------------------------------------- |
| `size`               | `ComponentSizeT`  | `'md'`       | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                 |
| `variant`            | `TextareaVariant` | `'outlined'` | `'outlined' \| 'filled' \| 'borderless'`               |
| `status`             | `TextareaStatus`  | `'default'`  | `'default' \| 'success' \| 'warning' \| 'error'`       |
| `resize`             | `TextareaResize`  | `'vertical'` | `'none' \| 'vertical' \| 'horizontal' \| 'both'`       |
| `rows`               | `number`          | `3`          | Filas visibles por defecto.                            |
| `maxlength`          | `number \| null`  | `null`       | Límite máximo de caracteres.                           |
| `showCharacterCount` | `boolean`         | `false`      | Activa la etiqueta con la cuenta actual de caracteres. |

---

## 💻 Ejemplos de Uso

```html
<!-- Textarea Estándar con Contador de Caracteres -->
<ks-textarea
  formControlName="bio"
  placeholder="Escribe tu biografía..."
  [maxlength]="200"
  [showCharacterCount]="true"
/>

<!-- Textarea sin redimensionamiento -->
<ks-textarea formControlName="comment" resize="none" [rows]="5" />
```

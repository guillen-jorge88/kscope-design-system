# 🏷️ Label Atom (`ks-label`)

El átomo **Label** (`<ks-label>`) proporciona la capa semántica y de accesibilidad para asociar etiquetas de texto con campos de entrada (`Input`, `Textarea`, `Select`, etc.).

---

## 🛠️ API del Componente

### Inputs

| Input      | Tipo             | Defecto     | Descripción                                                        |
| :--------- | :--------------- | :---------- | :----------------------------------------------------------------- |
| `for`      | `string`         | `''`        | ID del control de formulario asociado (`forId`).                   |
| `required` | `boolean`        | `false`     | Agrega un indicador visual de obligatoriedad (`*`).                |
| `disabled` | `boolean`        | `false`     | Aplica opacidad y cursor `not-allowed`.                            |
| `size`     | `ComponentSizeT` | `'md'`      | Tamaños mapeados (`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`).         |
| `color`    | `ColorT`         | `'neutral'` | Token de color semántico.                                          |
| `weight`   | `LabelWeight`    | `'medium'`  | Peso tipográfico (`'normal' \| 'medium' \| 'semibold' \| 'bold'`). |
| `align`    | `LabelAlignment` | `'left'`    | Alineación del texto (`'left' \| 'center' \| 'right'`).            |

---

## 💻 Ejemplo de Uso

```html
<ks-label for="username-input" [required]="true" size="md"> Nombre de Usuario </ks-label>
```

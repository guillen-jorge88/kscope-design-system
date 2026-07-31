# 🔘 Button Atom (`ks-button`)

El átomo **Button** (`<ks-button>`) es el elemento de acción primario dentro de **Kscope UI**. Soporta múltiples variantes, tamaños, integración con el átomo `Icon`, estados de carga (`loading`) y accesibilidad WCAG.

---

## 🛠️ API del Componente

### Inputs

| Input       | Tipo             | Defecto     | Descripción                                                         |
| :---------- | :--------------- | :---------- | :------------------------------------------------------------------ |
| `variant`   | `ButtonVariant`  | `'solid'`   | Variantes: `'solid' \| 'outline' \| 'ghost' \| 'link' \| 'subtle'`. |
| `size`      | `ComponentSizeT` | `'md'`      | Tamaños: `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`.                    |
| `color`     | `ColorT`         | `'primary'` | Token de color semántico (`primary`, `success`, `danger`, etc.).    |
| `type`      | `ButtonType`     | `'button'`  | Atributo HTML nativo (`'button' \| 'submit' \| 'reset'`).           |
| `shape`     | `ButtonShape`    | `'rounded'` | Bordes: `'rounded' \| 'pill' \| 'square'`.                          |
| `disabled`  | `boolean`        | `false`     | Deshabilita la interacción y ajusta la opacidad.                    |
| `loading`   | `boolean`        | `false`     | Muestra un spinner animado reutilizando `<ks-icon>`.                |
| `fullWidth` | `boolean`        | `false`     | Ocupa el 100% del contenedor padre.                                 |
| `leftIcon`  | `string`         | `''`        | Nombre del icono a la izquierda.                                    |
| `rightIcon` | `string`         | `''`        | Nombre del icono a la derecha.                                      |

---

## 💻 Ejemplos de Uso

```html
<!-- Botón primario sólido -->
<ks-button color="primary" (click)="save()">Guardar</ks-button>

<!-- Botón con icono y estado de carga -->
<ks-button variant="outline" leftIcon="ph-download" [loading]="isDownloading()">
  Descargar
</ks-button>
```

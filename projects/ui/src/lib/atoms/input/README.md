# 📥 Input Atom (`ks-input`)

El átomo **Input** (`<ks-input>`) es el componente de entrada de texto principal de **Kscope UI**. Ofrece compatibilidad completa con Angular Reactive Forms (`formControlName`), estados de validación, botones para alternar visibilidad de contraseña o limpiar texto, y soporte para afijos (iconos y textos).

---

## 🛠️ API del Componente

### Inputs

| Input        | Tipo             | Defecto      | Descripción                                                                 |
| :----------- | :--------------- | :----------- | :-------------------------------------------------------------------------- |
| `type`       | `InputType`      | `'text'`     | `'text' \| 'password' \| 'email' \| 'number' \| 'search' \| 'tel' \| 'url'` |
| `size`       | `ComponentSizeT` | `'md'`       | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                      |
| `variant`    | `InputVariant`   | `'outlined'` | `'outlined' \| 'filled' \| 'borderless'`                                    |
| `status`     | `InputStatus`    | `'default'`  | `'default' \| 'success' \| 'warning' \| 'error'`                            |
| `clearable`  | `boolean`        | `false`      | Agrega un botón para limpiar el texto ingresado.                            |
| `leftIcon`   | `string`         | `''`         | Icono a la izquierda dentro del input.                                      |
| `rightIcon`  | `string`         | `''`         | Icono a la derecha dentro del input.                                        |
| `prefixText` | `string`         | `''`         | Texto prefijo estático (ej: `$` o `https://`).                              |
| `suffixText` | `string`         | `''`         | Texto sufijo estático (ej: `.com` o `USD`).                                 |

---

## 💻 Ejemplos de Uso

```html
<!-- Input Básico con Reactive Forms -->
<ks-input
  formControlName="email"
  type="email"
  placeholder="correo@ejemplo.com"
  leftIcon="ph-envelope"
/>

<!-- Input Contraseña con alternador de visibilidad automático -->
<ks-input formControlName="password" type="password" placeholder="Ingresa tu clave" />

<!-- Input con prefijo y botón de limpieza -->
<ks-input formControlName="price" prefixText="$" [clearable]="true" />
```

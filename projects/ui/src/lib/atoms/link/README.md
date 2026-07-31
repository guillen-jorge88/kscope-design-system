# 🔗 Link Atom (`ks-link`)

El átomo **Link** (`<ks-link>`) proporciona navegación semántica y accesible para hipervínculos dentro de **Kscope UI**. Ofrece integración automática de la directiva `rel="noopener noreferrer"` para enlaces externos (`_blank`), iconos opcionales y control de subrayado.

---

## 🛠️ API del Componente

### Inputs

| Input       | Tipo             | Defecto     | Descripción                                                         |
| :---------- | :--------------- | :---------- | :------------------------------------------------------------------ |
| `href`      | `string`         | `''`        | Dirección URL de destino.                                           |
| `target`    | `LinkTarget`     | `'_self'`   | Destino de apertura (`'_self' \| '_blank' \| '_parent' \| '_top'`). |
| `external`  | `boolean`        | `false`     | Agrega `rel="noopener noreferrer"` e icono de enlace externo.       |
| `underline` | `LinkUnderline`  | `'hover'`   | Subrayado: `'always' \| 'hover' \| 'never'`.                        |
| `size`      | `ComponentSizeT` | `'md'`      | Tamaños mapeados (`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`).          |
| `color`     | `ColorT`         | `'primary'` | Token de color semántico.                                           |
| `disabled`  | `boolean`        | `false`     | Inhabilita la interacción del enlace.                               |
| `leftIcon`  | `string`         | `''`        | Icono a la izquierda del texto.                                     |
| `rightIcon` | `string`         | `''`        | Icono a la derecha del texto.                                       |

---

## 💻 Ejemplos de Uso

```html
<!-- Enlace estándar -->
<ks-link href="/dashboard">Ir al Dashboard</ks-link>

<!-- Enlace externo con icono automático -->
<ks-link href="[https://kscope.dev](https://kscope.dev)" [external]="true" target="_blank">
  Documentación Oficial
</ks-link>
```

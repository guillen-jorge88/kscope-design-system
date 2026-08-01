# 🖼️ Image Atom (`ks-image`)

El átomo **Image** (`<ks-image>`) gestiona el renderizado optimizado de imágenes dentro de **Kscope UI**. Incluye estados de carga automáticos (Shimmer Skeleton), manejo de fallback por error, lazy loading nativo y control de aspecto visual.

---

## 🛠️ API del Componente

### Inputs

| Input          | Tipo               | Defecto             | Descripción                                                                      |
| :------------- | :----------------- | :------------------ | :------------------------------------------------------------------------------- |
| `src`          | `string`           | **Requerido**       | Ruta/URL de la imagen.                                                           |
| `alt`          | `string`           | **Requerido**       | Texto descriptivo WCAG.                                                          |
| `fit`          | `ImageObjectFit`   | `'cover'`           | Estilo `object-fit`: `'cover' \| 'contain' \| 'fill' \| 'none' \| 'scale-down'`. |
| `aspectRatio`  | `ImageAspectRatio` | `'auto'`            | Relación de aspecto CSS (`'1/1'`, `'16/9'`, `'4/3'`, etc.).                      |
| `radius`       | `ImageRadius`      | `'none'`            | Bordes redondeados (`'none' \| 'sm' \| 'md' \| 'lg' \| 'full'`).                 |
| `loading`      | `ImageLoading`     | `'lazy'`            | Carga nativa (`'lazy' \| 'eager'`).                                              |
| `fallbackSrc`  | `string`           | `''`                | URL alternativa en caso de fallar la imagen principal.                           |
| `fallbackIcon` | `string`           | `'ph-image-broken'` | Icono visual de reemplazo si todo falla.                                         |

### Outputs

| Evento   | Tipo Emitido | Descripción                                            |
| :------- | :----------- | :----------------------------------------------------- |
| `loaded` | `Event`      | Se emite cuando la imagen se ha cargado correctamente. |
| `error`  | `Event`      | Se emite cuando la imagen no pudo ser cargada.         |

---

## 💻 Ejemplos de Uso

```html
<!-- Imagen con relación de aspecto y bordes redondeados -->
<ks-image
  src="[https://picsum.photos/800/400](https://picsum.photos/800/400)"
  alt="Paisaje de montaña"
  aspectRatio="16/9"
  radius="md"
/>

<!-- Avatar circular con fallback -->
<ks-image
  src="/invalid-user-path.png"
  fallbackSrc="/assets/default-avatar.png"
  alt="Foto de perfil"
  aspectRatio="1/1"
  radius="full"
/>
```

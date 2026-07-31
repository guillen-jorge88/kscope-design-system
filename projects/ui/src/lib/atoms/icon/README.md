# 💎 Icon Atom (`ks-icon`)

El átomo **Icon** (`<ks-icon>`) es un componente elemental e indispensable dentro del sistema de diseño **Kscope UI**. Diseñado bajo arquitectura standalone con Angular Signals y estrategia `OnPush`, sirve como la base visual para la representación de simbología accesible en botones, etiquetas, alertas, campos de formulario y menús.

---

## 🎨 Características

- **Soporte Multi-librería**: Compatible con `custom` (SVG/CSS local), `material`, `heroicons` y `fontawesome`.
- **Integración con Tokens Semánticos**: Escala responsivamente mapeado a `ICON_TOKENS` y tokens W3C (`SEMANTIC_SIZING`).
- **Estados Reactivos**: Soporte para animación continua (`spin`), rotación en grados (`rotate`) y variante rellena (`filled`).
- **Accesibilidad Incorporada (WCAG)**: Manejo automático de atributos `aria-hidden`, `aria-label` y `role="img"`.

---

## 🛠️ API del Componente

### Inputs

| Input       | Tipo             | Defecto       | Descripción                                                                                                  |
| :---------- | :--------------- | :------------ | :----------------------------------------------------------------------------------------------------------- |
| `name`      | `string`         | **Requerido** | Nombre o identificador de la clase del icono.                                                                |
| `library`   | `IconLibrary`    | `'custom'`    | Librería de destino (`'custom' \| 'material' \| 'heroicons' \| 'fontawesome'`).                              |
| `size`      | `ComponentSizeT` | `'md'`        | Tamaños mapeados a tokens semánticos (`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`).                               |
| `color`     | `ColorT`         | `'neutral'`   | Token de color del tema (`'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'neutral'`).     |
| `filled`    | `boolean`        | `false`       | Activa la variante sólida/rellena si la librería lo soporta.                                                 |
| `rotate`    | `number`         | `0`           | Grados de rotación manual (`90`, `180`, `270`, etc.).                                                        |
| `spin`      | `boolean`        | `false`       | Activa la animación de rotación infinita (ideal para spinners y loaders).                                    |
| `ariaLabel` | `string`         | `''`          | Texto descriptivo para lectores de pantalla. Si está vacío, se marca como decorativo (`aria-hidden="true"`). |

---

## 💻 Ejemplos de Uso

### 1. Uso Básico (Custom Icon)

```html
<ks-icon name="ph-user" />

<!-- Material Symbols -->
<ks-icon name="favorite" library="material" size="lg" color="danger" [filled]="true" />

<!-- FontAwesome -->
<ks-icon name="check-circle" library="fontawesome" color="success" />

<!-- Icono de Carga (Spinner) con Accesibilidad -->
<ks-icon name="spinner" size="sm" [spin]="true" ariaLabel="Cargando información del usuario..." />
```

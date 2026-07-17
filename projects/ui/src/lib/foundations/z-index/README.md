# Z-Index Foundation 🥞

El módulo de **Z-Index** gestiona la jerarquía visual de profundidad (plano tridimensional Z) en **Kaleidoscope UI**. Su propósito principal es erradicar las colisiones de capas ("z-index wars") prohibiendo estrictamente el uso de números mágicos arbitrarios como `9999` o `99999` en favor de capas semánticas predecibles.

---

## 🥞 Mapa de Capas del Sistema (Jerarquía de Profundidad)

El sistema de capas está estructurado para apilarse de forma consistente. La visualización de profundidad es la siguiente:

```text
▲ Superior (Enfrente del Usuario)
│   [900] toast      ➔ Notificaciones persistentes globales (Toasts, SnackBar)
│   [800] tooltip    ➔ Globos informativos contextuales de interacción rápida
│   [700] popover    ➔ Menús flotantes contextuales, selectores de fechas complejos
│   [600] modal      ➔ Ventanas de diálogo emergentes enfocadas
│   [500] drawer     ➔ Paneles de navegación o configuración laterales
│   [400] overlay    ➔ Fondos oscurecedores de pantalla (Backdrops de modales/drawers)
│   [300] fixed      ➔ Barras persistentes de pantalla (Footers, chats flotantes)
│   [200] sticky     ➔ Encabezados que se congelan al hacer scroll (Headers)
│   [100] dropdown   ➔ Menús desplegables comunes de inputs o barras superiores
│   [10 ] raised     ➔ Tarjetas elevadas, estados activos de items
│   [0  ] base       ➔ Flujo y orden natural del documento HTML
▼ Inferior (Al Fondo)
```

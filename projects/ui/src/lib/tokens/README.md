# Design Tokens Module 💎

Los **Design Tokens** representan la máxima capa de abstracción y la única fuente de verdad visual de **Kaleidoscope UI**. En lugar de inyectar valores estáticos o variables semánticas generales en los componentes, dividimos nuestra arquitectura en tres niveles de tokens según el estándar del **Design Tokens Community Group (W3C)**.

---

## 📐 Niveles de Abstracción

```text
┌────────────────────────────────────────┐
│         Level 1: PRIMITIVOS            │ ➔ Valores crudos físicos de diseño
│ (ej. COLOR_PRIMITIVES.blue500 = #3B82F6)│   (No tienen semántica de interfaz)
└───────────────────┬────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│         Level 2: SEMÁNTICOS            │ ➔ Decisiones por intención o rol
│   (ej. SEMANTIC_COLORS.primary = blue) │   (Responden a la pregunta "¿para qué?")
└───────────────────┬────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│         Level 3: COMPONENTES           │ ➔ Propiedades exclusivas de cada UI Element
│   (ej. BUTTON_TOKENS.solid.bg = primary)│   (Garantizan modularidad e independencia)
└────────────────────────────────────────┘
```

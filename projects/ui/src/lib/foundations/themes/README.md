# Themes & Brands Foundation 🎨

El módulo de **Themes** separa la jerarquía de **Contraste de Superficies (Tema)** de la de **Identidad de Negocio (Marca)** en **Kaleidoscope UI**. Al aislar ambos conceptos mediante variables de entorno dinámicas, Kscope puede comportarse como un motor multitenant en tiempo real de forma nativa.

```text
┌────────────────────────────────────────────────────────┐
│                      Kscope UI                         │
└────────────────────────────────────────────────────────┘
          │                                   │
          ▼                                   ▼
   TEMA (Contraste)                     MARCA (Identidad)
 ┌───────────────────┐               ┌─────────────────────┐
 │  data-theme=""    │               │  data-brand=""      │
 ├───────────────────┤               ├─────────────────────┤
 │ * light           │               │ * default           │
 │ * dark            │               │ * corporate         │
 │ * high-contrast   │               │ * banco             │
 └───────────────────┘               └─────────────────────┘
```

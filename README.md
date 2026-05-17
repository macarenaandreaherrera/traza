# Prompt Maestro (base técnica)

Base inicial para una app desktop de producción de KVs retail con:

- Electron + React + TypeScript
- Canvas con Konva
- Estructura de 3 paneles (assets/prompt, canvas, propiedades)
- Modelo de capas editable para flujo: **Final / Fondo / Producto**

## Ejecutar

```bash
npm install
npm run dev
```

## Estado actual

Este commit deja un esqueleto funcional con:

1. Carga de archivos (referencias, PNG, fuentes) en panel izquierdo.
2. Prompt IA (interfaz preparada para integrar OpenAI/Stability).
3. Canvas editable con drag en capas base.
4. Panel de propiedades para editar posición y tamaño.
5. Arquitectura de store global con Zustand para extender reglas de branding, locks y export editable.

## Próximos pasos sugeridos

- Integrar `ag-psd` para export PSD por capas.
- Añadir bloqueo por metadatos (`locked`, `deformable`, `minScale`, `maxScale`).
- Implementar `Typography Manager` con carga de TTF/OTF real y uso por rol.
- Export multi-formato (16:9, 1:1, 4:5, 9:16) con safe areas.
- Motor de reglas visuales por marca.

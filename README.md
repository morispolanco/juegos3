# El Archivo Maya 🏛️🇬🇹

Aplicación web enfocada en entretenimiento cultural, arqueológico e intelectual inspirado en Guatemala y la civilización maya.

## Tecnologías
- **Frontend**: React + Vite + TailwindCSS 4
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **IA**: OpenRouter (Gemini 3.1 Flash Lite)
- **Despliegue**: Vercel (Serverless Functions)

## Estructura
- `/api/generate.js`: Función serverless para manejar llamadas seguras a OpenRouter.
- `/src/components/ads`: Componentes de monetización con Advertica.
- `/src/components/puzzles`: Mecánicas de juego (Glifos, etc).
- `/src/services/aiService.js`: Lógica de interacción con la IA.

## Configuración
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Crear un archivo `.env` en la raíz (para desarrollo local) con:
   ```
   OPENROUTER_API_KEY=tu_api_key_aqui
   ```
4. Ejecutar `npm run dev`.

## Despliegue en Vercel
1. Conectar el repo a Vercel.
2. Configurar la variable de entorno `OPENROUTER_API_KEY`.
3. Vercel detectará automáticamente la carpeta `api/` y desplegará las Serverless Functions.

## Monetización
- **Banners**: Advertica scripts integrados en `TopBanner` y `BottomBanner`.
- **Interstitials**: Activados al finalizar expediciones.
- **Rewarded**: Disponibles para pistas y recompensas extra.

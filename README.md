# Pokedex App (Expo)

Pokedex App es una aplicación móvil desarrollada con **Expo + React Native** que consume datos de la **PokeAPI**.

## 🧠 ¿Qué hace?

- Muestra una lista infinita de Pokémon (paginado) usando la API oficial de PokéAPI.
- Al tocar un Pokémon se muestra su detalle (peso, altura, tipo, stats, etc.).
- Usa `react-query` para caché y fetching eficiente.
- Navegación basada en [Expo Router](https://docs.expo.dev/router/introduction) con file-based routing.

## 🧩 Tecnologías clave

- **Expo** (React Native) - Base del proyecto
- **expo-router** - Enrutamiento basado en archivos
- **@tanstack/react-query** - Fetch, caché y estados de carga
- **axios** - Cliente HTTP
- **styled-components** - Estilos en JS
- **PokeAPI** (https://pokeapi.co/) - Fuente de datos

## 🌐 API utilizada

Esta app consume los siguientes endpoints de la PokeAPI:

- `https://pokeapi.co/api/v2/pokemon?limit=20` (lista paginada)
- `https://pokeapi.co/api/v2/pokemon/{id}` (detalles de cada Pokémon)

## 🚀 Cómo ejecutar

1. Instalar dependencias

```bash
npm install
```

2. Iniciar la app

```bash
npx expo start
```

3. Abrir en:

- Android emulator
- iOS simulator
- Expo Go (Android/iOS)

## 📸 Capturas de pantalla

> Nota: las imágenes están en `public/1.png`, `public/2.png`, `public/3.png`.

![Pantalla principal](public/1.png)

![Detalle Pokémon](public/2.png)

![Scroll infinito](public/3.png)

## 🎥 Video de demostración

> Video ubicado en `public/pokedex-app.mp4`

[Ver video en el navegador](public/pokedex-app.mp4)

---

## 📦 Estructura principal

- `app/` - Rutas y pantallas (Expo Router)
- `components/` - Componentes reutilizables (cards, UI)
- `assets/` - Imágenes y recursos
- `styles/` - Estilos globales

---

## 📦 Empaquetar APK con Expo (EAS)

### 1) Crea una cuenta en Expo

Visita: https://expo.dev/signup

### 2) Exportar tu app con EAS (build local)

#### 2.1) Instala EAS CLI

```bash
npm install -g eas-cli
```

Verifica la instalación:

```bash
eas --version
```

#### 2.2) Inicia sesión en Expo

```bash
eas login
```

Si no tienes cuenta, consulta:

```bash
eas login --help
```

Verifica si estás logueado:

```bash
eas whoami
```

#### 2.3) Configura EAS en tu proyecto (solo la primera vez)

```bash
npx eas build:configure
```

Esto creará un archivo `eas.json`.

Ejemplo de configuración mínima:

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}
```

#### 2.4) Ejecuta el build local

Generar APK localmente:

```bash
npx eas build -p android --profile preview --local
```

Generar APK desde el perfil de desarrollo:

```bash
eas build --profile development --platform android
```

#### 2.5) Espera y localiza el APK

Al finalizar, verás algo como:

```
✔ Build finished
📦 File saved to: ./dist/MyApp-preview.apk
```

---

## 🚀 Opción 2: Generar APK con `expo build`

✨ Si tu proyecto usa el flujo clásico de Expo (managed), esta es la forma más rápida.

### Paso 1: Instala la CLI de Expo

```bash
npm install -g expo-cli
```

O, si usas el sistema nuevo:

```bash
npx expo install
```

### Paso 2: Inicia sesión en Expo

```bash
npx expo login
```

### Paso 3: Genera el APK (local o en la nube)

#### Opción A (recomendada): Build en la nube

```bash
npx expo build:android -t apk
```

Al finalizar verás una URL para descargar el APK, por ejemplo:

```
✔ Build successful
➡ Download: https://expo.dev/artifacts/eas/abc123.apk
```

---

## 🧽 Reset del proyecto

Si quieres empezar desde cero:

```bash
npm run reset-project
```

Esto moverá el código actual a `app-example/` y generará un `app/` limpio.

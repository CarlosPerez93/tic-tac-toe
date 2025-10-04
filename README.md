# Tic-Tac-Toe con React, TypeScript e IA invencible

Este proyecto es una implementación del clásico juego Tic-Tac-Toe (Tres en Raya) construido con tecnologías web modernas. El objetivo principal es demostrar una comprensión profunda de React, la arquitectura de componentes, el manejo de estado con Hooks, la implementación de algoritmos complejos como Minimax y la aplicación de una sólida estrategia de testing.

## 📜 Descripción del Proyecto

La aplicación permite a un jugador humano (X) competir contra un oponente controlado por la IA (O). La IA utiliza el algoritmo Minimax para calcular el movimiento óptimo en cada turno, lo que la convierte en un oponente invencible. El proyecto está construido desde cero, prestando especial atención a la calidad del código, la mantenibilidad y las buenas prácticas de desarrollo.

## ✨ Características Principales

- **Jugabilidad Clásica**: Interfaz limpia e intuitiva para jugar al Tic-Tac-Toe.
- **Oponente con IA**: Un bot implementado con el algoritmo **Minimax** que garantiza que nunca perderá una partida.
- **Diseño Responsivo**: La interfaz se adapta a diferentes tamaños de pantalla.
- **Componentes Reutilizables**: La interfaz está construida con componentes modulares y reutilizables.
- **Estado Centralizado**: La lógica del juego y el estado del tablero se gestionan de forma eficiente a través de un Custom Hook.

## 🛠️ Stack de Tecnologías y Herramientas

Este proyecto fue construido utilizando:

- **React (v19)**: Para la construcción de la interfaz de usuario declarativa y basada en componentes.
- **TypeScript**: Para añadir tipado estático, mejorar la robustez del código y la experiencia de desarrollo.
- **Vite**: Como herramienta de construcción y servidor de desarrollo, ofreciendo un arranque y recarga en caliente (HMR) extremadamente rápidos.
- **Vitest**: Para la ejecución de tests unitarios y de integración.
- **React Testing Library**: Para testear los componentes de React simulando el comportamiento del usuario.
- **ESLint**: Para el análisis estático del código y el mantenimiento de un estilo consistente.
- **CSS Modules**: Para estilizar los componentes de forma aislada y evitar colisiones de nombres.

## 🏗️ Arquitectura y Decisiones de Diseño

### 1. Arquitectura Basada en Componentes

La aplicación sigue una estricta arquitectura de componentes, donde cada parte de la UI es un componente independiente y con una única responsabilidad.

- `Game`: Orquesta el tablero de juego y renderiza las casillas.
- `Square`: Representa una única casilla en el tablero y maneja la interacción del clic.
- `WinnerDisplay` / `TurnsDisplay`: Componentes que muestran información relevante del estado del juego (ganador, turno actual).
- `ResetGame`: Componente que permite reiniciar la partida.

### 2. Lógica y Manejo de Estado con Custom Hooks

Toda la lógica del juego se ha abstraído en el Custom Hook `useBoard`. Esta decisión de diseño permite:

- **Separación de Responsabilidades**: La lógica del estado (`board`, `turn`, `winner`) está completamente desacoplada de la capa de presentación.
- **Reutilización**: El hook `useBoard` podría ser reutilizado en diferentes vistas o componentes si la aplicación creciera.
- **Código Limpio**: Los componentes se vuelven más sencillos y declarativos, ya que solo consumen el estado y las funciones expuestas por el hook.

### 3. IA con Algoritmo Minimax

El corazón de la inteligencia artificial del oponente reside en la implementación del **algoritmo Minimax**.

- **`minimax.ts`**: Este módulo contiene la lógica pura del algoritmo. Su función es evaluar todos los posibles movimientos futuros y elegir el que maximice las posibilidades de ganar de la IA (o minimizar las del jugador).
- **Integración**: El hook `useBoard` invoca a la función `findBestMove` cuando es el turno de la IA. Se añadió un `setTimeout` para simular un "tiempo de pensamiento" y mejorar la experiencia de usuario.

## 🧪 Estrategia de Testing

El proyecto cuenta con una cobertura de tests sólida para garantizar la fiabilidad del código.

- **Tests Unitarios**: Se han creado tests para funciones críticas como `checkWinner` para asegurar que la lógica de victoria funciona correctamente en todos los escenarios.
- **Tests de Componentes**: Utilizando `React Testing Library` y `Vitest`, se han testeado los componentes para verificar:
    - **Renderizado Correcto**: Que los componentes se rendericen correctamente según las props recibidas.
    - **Interacción del Usuario**: Que los eventos de clic se manejen adecuadamente y llamen a las funciones correspondientes (ej. `updateBoard`).
- **Tests de Hooks**: Se ha testeado el comportamiento del hook `useBoard` para asegurar que el estado se actualiza de forma predecible.

## 🚀 Cómo Empezar

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd tic-tac-toe
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Vite.
- `npm run build`: Compila la aplicación para producción.
- `npm run preview`: Sirve la build de producción localmente.
- `npm run test`: Ejecuta todos los tests con Vitest en modo "watch".
- `npm run coverage`: Genera un informe de cobertura de tests.
- `npm run lint`: Analiza el código con ESLint en busca de errores y problemas de estilo.
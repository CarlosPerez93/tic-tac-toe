<p align="center">
	<img src="public/tic-tac-toe.svg" alt="Icono de Tic Tac Toe" width="96" height="96">
</p>

<h1 align="center">Tic Tac Toe</h1>

<p align="center">Un tres en raya para jugar contra la máquina, hecho con React y TypeScript.</p>

<p align="center">
	<a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=20232A" alt="React 19.1"></a>
	<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5.8"></a>
	<a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite&logoColor=white" alt="Vite 7.1"></a>
	<a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Vitest-3.2-6E9F18?logo=vitest&logoColor=white" alt="Vitest 3.2"></a>
</p>

Una partida rápida de 3 × 3: jugás con **X** y la máquina responde con **O**. El tablero se reinicia desde el botón de la pantalla.

## Vista del tablero

|   X    |  O  |   X    |
| :----: | :-: | :----: |
|   O    |  X  | &nbsp; |
| &nbsp; |  O  | &nbsp; |

## Cómo se juega

1. X juega primero: elegí una casilla vacía.
2. La máquina juega con O automáticamente.
3. Gana quien alinea tres marcas en horizontal, vertical o diagonal. Si se llena el tablero sin una línea ganadora, hay empate.
4. Usá **Reset Game** para empezar otra partida.

## La máquina

No hay selector de dificultad. En cada partida, la máquina sortea su estrategia:

- En aproximadamente el **35%** de las partidas, elige al azar entre las casillas libres.
- En las demás, usa **Minimax** para buscar la mejor jugada.

Así, la máquina conserva su juego estratégico la mayoría de las veces, pero puede cometer errores en algunas partidas.

## Tecnologías

- **React 19** para la interfaz.
- **TypeScript** para los tipos y el código de la aplicación.
- **Vite** para el servidor de desarrollo y el empaquetado.
- **Vitest** y **Testing Library** para las pruebas.

## Empezar

Necesitás Node.js y pnpm instalados.

```bash
pnpm install
pnpm dev
```

Abrí la dirección local que muestra Vite en la terminal.

## Comandos

| Comando                | Acción                                                 |
| ---------------------- | ------------------------------------------------------ |
| `pnpm dev`             | Inicia el servidor de desarrollo.                      |
| `pnpm exec vitest run` | Ejecuta todas las pruebas una vez.                     |
| `pnpm test`            | Inicia Vitest en modo interactivo.                     |
| `pnpm coverage`        | Ejecuta las pruebas con cobertura.                     |
| `pnpm lint`            | Analiza el código con ESLint.                          |
| `pnpm build`           | Verifica TypeScript y genera la versión de producción. |
| `pnpm preview`         | Sirve localmente la versión de producción.             |

## Estructura

```text
src/
├── components/   # Componentes del tablero, turnos y resultado
├── hooks/        # Estado y flujo de la partida
├── utils/        # Reglas, Minimax, movimientos y tipos
└── views/        # Pantalla principal del tablero
```

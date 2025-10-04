import type { BoardState } from "../../types/board.type";

const player = "X";
const opponent = "O";

function isMovesLeft(board: BoardState): boolean {
  return board.includes(null);
}

function evaluate(b: BoardState): number {
  // Checking for Rows for X or O victory.
  for (let row = 0; row < 9; row += 3) {
    if (b[row] === b[row + 1] && b[row + 1] === b[row + 2]) {
      if (b[row] === opponent) return +10;
      if (b[row] === player) return -10;
    }
  }

  // Checking for Columns for X or O victory.
  for (let col = 0; col < 3; col++) {
    if (b[col] === b[col + 3] && b[col + 3] === b[col + 6]) {
      if (b[col] === opponent) return +10;
      if (b[col] === player) return -10;
    }
  }

  // Checking for Diagonals for X or O victory.
  if (b[0] === b[4] && b[4] === b[8]) {
    if (b[0] === opponent) return +10;
    if (b[0] === player) return -10;
  }
  if (b[2] === b[4] && b[4] === b[6]) {
    if (b[2] === opponent) return +10;
    if (b[2] === player) return -10;
  }

  // Else if none of them have won then return 0
  return 0;
}

function minimax(board: BoardState, depth: number, isMax: boolean): number {
  const score = evaluate(board);

  if (score === 10) return score - depth;
  if (score === -10) return score + depth;
  if (!isMovesLeft(board)) return 0;

  if (isMax) {
    let best = -1000;
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = opponent;
        best = Math.max(best, minimax(board, depth + 1, !isMax));
        board[i] = null;
      }
    }
    return best;
  } else {
    let best = 1000;
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = player;
        best = Math.min(best, minimax(board, depth + 1, !isMax));
        board[i] = null;
      }
    }
    return best;
  }
}

export function findBestMove(board: BoardState): number {
  let bestVal = -1000;
  let bestMove = -1;

  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      board[i] = opponent;
      const moveVal = minimax(board, 0, false);
      board[i] = null;

      if (moveVal > bestVal) {
        bestMove = i;
        bestVal = moveVal;
      }
    }
  }
  return bestMove;
}

import type { BoardState } from "../types/board.type";
import { winnerCombinations } from "../constatns/winnerCombinations.constant";

export const checkWinner = (newBoard: BoardState) => {
  for (const combination of winnerCombinations) {
    const [a, b, c] = combination;
    if (
      newBoard[a] &&
      newBoard[a] === newBoard[b] &&
      newBoard[a] === newBoard[c]
    ) {
      return newBoard[a];
    }
  }
  return null;
};

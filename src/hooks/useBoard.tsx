import { useEffect, useState } from "react";

import { TURNS } from "../utils/constatns/turns.enum";
import { findBestMove, checkWinner } from "../utils/functions/";

import type {
  WinnerProps,
  UseBoardReturn,
  BoardState,
  TurnState,
} from "../utils/types/board.type";

const initialBoard: BoardState = Array(9).fill(null);

const useBoard = (): UseBoardReturn => {
  const [turn, setTurn] = useState<TurnState>(TURNS.X);
  const [winner, setWinner] = useState<WinnerProps>(null);
  const [board, setBoard] = useState<BoardState>(initialBoard);

  const nextTurn = () => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  const resetaGame = () => {
    setBoard(initialBoard);
    setTurn(TURNS.X);
    setWinner(null);
  };

  const updateBoard = (index: number) => {
    if (board[index!] || index === undefined || winner) return;

    const newBoard = [...board];

    newBoard[index!] = turn;

    setBoard(newBoard);

    nextTurn();

    const newWinner = checkWinner(newBoard);

    if (newWinner) setWinner(newWinner);
  };

  useEffect(() => {
    if (turn === TURNS.O && !winner) {
      const bestMove = findBestMove(board);
      setTimeout(() => {
        updateBoard(bestMove);
      }, 1000);
    }
  }, [turn, winner, TURNS.O]);

  return {
    winner,
    turn,
    board,
    resetaGame,
    updateBoard,
  };
};

export default useBoard;

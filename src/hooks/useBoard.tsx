import { useEffect, useState } from "react";

import { TURNS } from "../utils/constatns/turns.enum";
import { findBestMove, findRandomMove, checkWinner } from "../utils/functions/";

import type {
  WinnerProps,
  UseBoardReturn,
  BoardState,
  TurnState,
} from "../utils/types/board.type";

const initialBoard: BoardState = Array(9).fill(null);
const RANDOM_BOT_GAME_CHANCE = 0.35;

const useBoard = (): UseBoardReturn => {
  const [turn, setTurn] = useState<TurnState>(TURNS.X);
  const [winner, setWinner] = useState<WinnerProps>(null);
  const [board, setBoard] = useState<BoardState>(initialBoard);
  const [botPlaysRandomly, setBotPlaysRandomly] = useState(
    () => Math.random() < RANDOM_BOT_GAME_CHANCE,
  );

  const nextTurn = () => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  const resetaGame = () => {
    setBoard(initialBoard);
    setTurn(TURNS.X);
    setWinner(null);
    setBotPlaysRandomly(Math.random() < RANDOM_BOT_GAME_CHANCE);
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
      const bestMove = botPlaysRandomly
        ? findRandomMove(board)
        : findBestMove(board);
      setTimeout(() => {
        updateBoard(bestMove);
      }, 1000);
    }
  }, [turn, winner, board, botPlaysRandomly]);

  return {
    winner,
    turn,
    board,
    resetaGame,
    updateBoard,
  };
};

export default useBoard;

export const suma = (a: number, b: number) => a + b;

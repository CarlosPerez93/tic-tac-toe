import Square from "../Square/Square";
import type { BoardProps } from "../../utils/types/board.type";

import "./Game.css";

export const Game = ({ board, updateBoard }: BoardProps) => {
  return (
    <section className="game">
      {board.map((_, index) => (
        <Square key={index} squareIndex={index} updateBoard={updateBoard}>
          {board[index]}
        </Square>
      ))}
    </section>
  );
};

export default Game;

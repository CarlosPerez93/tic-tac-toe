import Game from "../../components/Game/Game";
import ButtonReset from "../../components/ResetGame/ResetGame";
import TurnsDisplay from "../../components/TurnsDisplay/TurnsDisplay";
import WinnerDisplay from "../../components/WinnerDisplay/WinnerDisplay";

import useBoard from "../../hooks/useBoard";

import "./DisplayBoard.css";

export const DisplayBoard = () => {
  const { turn, board, winner, resetaGame, updateBoard } = useBoard();

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <ButtonReset onClick={resetaGame} />
      <Game board={board} updateBoard={updateBoard} />
      <TurnsDisplay turn={turn} updateBoard={updateBoard} />
      <WinnerDisplay onClick={resetaGame} winner={winner} />
    </main>
  );
};

export default DisplayBoard;

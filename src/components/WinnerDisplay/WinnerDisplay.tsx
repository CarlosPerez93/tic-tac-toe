import Square from "../Square/Square";
import ResetGame from "../ResetGame/ResetGame";

import type { WinnerDisplayProps } from "../../utils/types/board.type";

export const WinnerDisplay = ({ winner, onClick }: WinnerDisplayProps) => {
  const winnerMesasge =
    winner === false ? "It is a draw 😐" : `The winner is: ${winner} 🎉`;
  return (
    <>
      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winnerMesasge}</h2>
            <header>{winner && <Square> {winner} </Square>}</header>
            <footer>
              <ResetGame onClick={onClick} />
            </footer>
          </div>
        </section>
      )}
    </>
  );
};

export default WinnerDisplay;

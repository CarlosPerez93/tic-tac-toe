import type { ResetGameProps } from "../../utils/types/board.type";

import "./ResetGame.css";

export const ResetGame = ({ onClick }: ResetGameProps) => {
  return (
    <button className="reset-button" onClick={onClick}>
      Reset Game
    </button>
  );
};

export default ResetGame;

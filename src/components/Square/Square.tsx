import type { SquareProps } from "../../utils/types/board.type";

import "./Square.css";

export const Square = ({
  children,
  isSelected,
  squareIndex,
  updateBoard,
}: SquareProps) => {
  const className = `square ${isSelected ? "selected" : ""}`;

  const handleClick = () => {
    updateBoard!(squareIndex!);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default Square;

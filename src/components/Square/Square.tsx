import type { SquareProps } from "../../utils/types/board.type";

import "./Square.css";

export const Square = ({
  children,
  isSelected,
  squareIndex,
  updateBoard,
}: SquareProps) => {
  const className = `square ${isSelected ? "selected" : ""}`;

  const isNotUndefined = updateBoard && squareIndex !== undefined;

  const handleClick = () => {
    if (isNotUndefined) updateBoard(squareIndex);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default Square;

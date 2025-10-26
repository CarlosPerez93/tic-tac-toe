type BoardState = (string | null)[];

type UpdateBoard = (index: number) => void;

type BoardProps = {
  board: BoardState;
  updateBoard: UpdateBoard;
};
export type SquareProps = {
  isSelected?: boolean;
  squareIndex?: number;
  children?: React.ReactNode;

  updateBoard?: UpdateBoard;
};

type TurnState = "X" | "O";

type TurnsProps = { turn: TurnState };

type WinnerProps = string | null | boolean;

type resetGame = () => void;

type ResetGameProps = {
  onClick: resetGame;
};

type WinnerDisplayProps = {
  winner: WinnerProps;
} & ResetGameProps;

type UseBoardReturn = {
  winner: WinnerProps;
  turn: TurnState;
  resetaGame: resetGame;
} & BoardProps;

export type {
  TurnState,
  BoardProps,
  TurnsProps,
  BoardState,
  WinnerProps,
  UpdateBoard,
  UseBoardReturn,
  ResetGameProps,
  WinnerDisplayProps,
};

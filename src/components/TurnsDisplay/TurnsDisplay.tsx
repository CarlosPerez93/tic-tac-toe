import Square from "../Square/Square";

import { TURNS } from "../../utils/constatns/turns.enum";
import type { TurnsProps } from "../../utils/types/board.type";

import "./TurnsDisplay.css";

export const Turns = ({ turn }: TurnsProps) => {
  return (
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  );
};

export default Turns;

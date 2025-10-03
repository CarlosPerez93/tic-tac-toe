import { describe, expect, test, vi } from "vitest";

import useBoard from "./useBoard";
import { render } from "@testing-library/react/";

const moockUseBoard = vi.fn();

describe("useBoard hook", () => {
  test("should work", () => {
    expect(typeof useBoard).toBe("function");
  });

  test("render useBoard", () => {
    render(moockUseBoard());
    expect(moockUseBoard).toHaveBeenCalled();
  });

  /*  expect(winner).toBe(null);
    expect(turn).toBe("X");
    expect(board).toEqual([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
    expect(typeof resetaGame).toBe("function");
    expect(typeof updateBoard).toBe("function");*/
});

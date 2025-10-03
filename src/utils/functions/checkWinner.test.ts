import { describe, expect, test } from "vitest";

import { checkWinner } from "./checkWinner";

describe("checkWinner function", () => {
  test("should return 'X' when X wins", () => {
    const board = ["X", "X", "X", null, "O", null, "O", null, null];
    const result = checkWinner(board);
    expect(result).toBe("X");
  });
  test("should return 'O' when O wins", () => {
    const board = ["X", "X", null, "O", "O", "O", null, "X", null];

    const result = checkWinner(board);
    expect(result).toBe("O");
  });

  test("should return null when there is no winner", () => {
    const board = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
    const result = checkWinner(board);
    expect(result).toBeNull();
  });
  test("should return null for an empty board", () => {
    const board = [null, null, null, null, null, null, null, null, null];
    const result = checkWinner(board);
    expect(result).toBeNull();
  });

  test("should return null for a partially filled board with no winner", () => {
    const board = ["X", "O", "X", null, "O", null, null, "X", null];
    const result = checkWinner(board);
    expect(result).toBeNull();
  });
});

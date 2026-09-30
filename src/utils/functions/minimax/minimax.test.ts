import { afterEach, describe, expect, test, vi } from "vitest";

import { findRandomMove } from "./minimax";

describe("findRandomMove", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("returns an empty square", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);

    const move = findRandomMove(["X", null, "O", null]);

    expect(move).toBe(1);
  });

  test("returns -1 when there are no empty squares", () => {
    const move = findRandomMove(["X", "O"]);

    expect(move).toBe(-1);
  });
});

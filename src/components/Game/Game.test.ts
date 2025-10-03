import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, vi, test, expect } from "vitest";

import Game from "./Game";

import type { BoardProps } from "../../utils/types/board.type";

// Initial board state for testing
const initialBoard: BoardProps["board"] = Array(9).fill(null);
// Mock function for updateBoard
const mockUpdateBoard = vi.fn();

describe("Game component", () => {
  beforeEach(() => {
    // Clear mock function calls before each test
    mockUpdateBoard.mockClear();
  });

  describe("Rendering and Structure", () => {
    test("must render nine interactive boxes (buttons) ", () => {
      render(Game({ board: initialBoard, updateBoard: mockUpdateBoard }));

      //search all elements with role button
      const squares = screen.getAllByRole("button");
      // Assert that there are exactly 9 buttons rendered
      expect(squares).toHaveLength(9);
    });

    test("must render content correct (X u O) the 'board' prop", () => {
      render(Game({ board: initialBoard, updateBoard: mockUpdateBoard }));
      // Check that each square displays the correct content based on the board state
      initialBoard.forEach((value) => {
        if (value !== null) {
          expect(screen.queryByText("X")).toBeInTheDocument();
          expect(screen.queryByText("O")).toBeInTheDocument();
        }
      });
    });

    test("must render content when the vlaue is empty ", () => {
      render(Game({ board: initialBoard, updateBoard: mockUpdateBoard }));
      // Check that no squares display "X" or "O" when the board is empty
      expect(screen.queryByText("X")).not.toBeInTheDocument();
      expect(screen.queryByText("O")).not.toBeInTheDocument();
    });
  });

  describe("driving clics", () => {
    test("must call 'updateBoard' when a square is clicked", () => {
      render(Game({ board: initialBoard, updateBoard: mockUpdateBoard }));
      // Simulate a click on the first square (button)
      const firstSquare = screen.getAllByRole("button")[0];
      firstSquare.click();
      // Assert that the mockUpdateBoard function was called once
      expect(mockUpdateBoard).toHaveBeenCalledTimes(1);
    });

    test("must call 'updateBoard' with the correct index when a square is clicked", () => {
      render(Game({ board: initialBoard, updateBoard: mockUpdateBoard }));
      // Simulate a click on the first square (button)
      const firstSquare = screen.getAllByRole("button")[0];
      firstSquare.click();
      // Assert that the mockUpdateBoard function was called with index 0
      expect(mockUpdateBoard).toHaveBeenCalledWith(0);
    });

    test("must call 'updateBoard' with the correct index when different squares are clicked", () => {
      render(Game({ board: initialBoard, updateBoard: mockUpdateBoard }));
      // Simulate clicks on different squares (buttons)
      const squares = screen.getAllByRole("button");
      squares[2].click();
      squares[5].click();
      squares[7].click();
      // Assert that the mockUpdateBoard function was called with the correct indices
      expect(mockUpdateBoard).toHaveBeenCalledWith(2);
      expect(mockUpdateBoard).toHaveBeenCalledWith(5);
      expect(mockUpdateBoard).toHaveBeenCalledWith(7);
    });

    test("must call 'updateBoard' with the index 5 where the clic at 6ta square", () => {
      render(Game({ board: initialBoard, updateBoard: mockUpdateBoard }));
      // Simulate a click on the sixth square (button)
      const sixthSquare = screen.getAllByRole("button")[5];
      sixthSquare.click();
      // Assert that the mockUpdateBoard function was called with index 5
      expect(mockUpdateBoard).toHaveBeenCalledWith(5);
    });
  });
});

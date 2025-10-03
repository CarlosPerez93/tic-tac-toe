import { render, screen } from "@testing-library/react";
import { beforeEach, describe, vi, test, expect } from "vitest";

import Square from "./Square";

import type { SquareProps } from "../../utils/types/board.type";

// Mock function for updateBoard
const mockUpdateBoard = vi.fn();
// Default props for the Square component
const defaultProps: SquareProps = {
  squareIndex: 0,
  updateBoard: mockUpdateBoard,
  children: null,
};
describe("Square component", () => {
  beforeEach(() => {
    // Clear mock function calls before each test
    mockUpdateBoard.mockClear();
  });
  describe("Rendering and Structure", () => {
    test("must render a button element", () => {
      render(Square({ ...defaultProps }));
      // Find the button element in the rendered output
      const buttonElement = screen.getByRole("button");
      // Assert that the button element is present in the document
      expect(buttonElement).toBeInTheDocument();
    });

    test("must render content passed as children", () => {
      const content = "X";
      render(Square({ ...defaultProps, children: content }));
      // Check that the content is rendered correctly
      expect(screen.getByText(content)).toBeInTheDocument();
    });
    test("must apply 'selected' class when 'isSelected' prop is true", () => {
      render(Square({ ...defaultProps, isSelected: true }));
      const buttonElement = screen.getByRole("button");
      // Assert that the button has the 'selected' class
      expect(buttonElement).toHaveClass("selected");
    });
    test("must not apply 'selected' class when 'isSelected' prop is false or undefined", () => {
      render(Square({ ...defaultProps, isSelected: false }));
      const buttonElement = screen.getByRole("button");
      // Assert that the button does not have the 'selected' class
      expect(buttonElement).not.toHaveClass("selected");
    });
  });
  describe("Interaction", () => {
    test("must call 'updateBoard' with the correct index when clicked", () => {
      const squareIndex = 2;
      render(Square({ ...defaultProps, squareIndex: squareIndex }));
      const buttonElement = screen.getByRole("button");
      // Simulate a click on the button
      buttonElement.click();
      // Assert that the mockUpdateBoard function was called once with the correct index
      expect(mockUpdateBoard).toHaveBeenCalledTimes(1);
      expect(mockUpdateBoard).toHaveBeenCalledWith(squareIndex);
    });
  });
});

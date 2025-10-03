import { describe, expect, test, vi } from "vitest";

import { render, screen } from "@testing-library/react";
import WinnerDisplay from "./WinnerDisplay";

describe("WinnerDisplay component", () => {
  describe("Rendering and Structure", () => {
    test("must render the winner message when there is a winner", () => {
      render(WinnerDisplay({ winner: "X", onClick: () => {} }));
      expect(screen.getByText("The winner is: X 🎉")).toBeInTheDocument();
    });

    test("must render the draw message when there is a draw", () => {
      render(WinnerDisplay({ winner: false, onClick: () => {} }));
      expect(screen.getByText("It is a draw 😐")).toBeInTheDocument();
    });
    test("must not render anything when there is no winner", () => {
      const { container } = render(
        WinnerDisplay({
          winner: null,
          onClick: () => {},
        })
      );
      expect(container).toBeEmptyDOMElement();
    });
  });
  describe("Button functionality", () => {
    test("must call the onClick function when the reset button is clicked", () => {
      const mockOnClick = vi.fn();
      render(WinnerDisplay({ winner: "O", onClick: mockOnClick }));
      const resetButton = screen.getByRole("button", { name: "Reset Game" });
      resetButton.click();
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});

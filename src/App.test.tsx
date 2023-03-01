import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// components
import App from "./App";

describe("App", () => {
  it("h1 is in the document", () => {
    // Arrange
    render(<App />);
    // Act
    // Expect | Assert
    expect(
      screen.getByRole("heading", {
        level: 1,
      }),
    ).toBeInTheDocument();
  });
  it("renders h1 with text Resume.Analyze.Apply.", () => {
    // Arrange
    render(<App />);
    // Act
    // Expect | Assert
    expect(
      screen.getByRole("heading", {
        level: 1,
      }),
    ).toHaveTextContent("Resume.Analyze.Apply.");
  });
});

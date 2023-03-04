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
  it("renders h1 with text Generate your next Resume/cover-letter using chatGPT", () => {
    // Arrange
    render(<App />);
    // Act
    // Expect | Assert
    expect(
      screen.getByRole("heading", {
        level: 1,
      }),
    ).toHaveTextContent("Generate your next Resume/cover-letter using chatGPT");
  });
  it("Has an anchor tag that has href attribute", () => {
    // Arrange
    render(<App />);
    // Act
    // Expect | Assert
    expect(screen.getByRole("link")).toHaveAttribute("href");
  });
});

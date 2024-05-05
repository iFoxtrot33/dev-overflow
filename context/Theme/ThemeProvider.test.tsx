import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { ThemeContext, ThemeProvider } from "./ThemeProvider"; // Adjust the import path as necessary
import { handleThemeChange } from "./utils";
import { useTheme } from "./hooks";

// Mock the handleThemeChange function
vi.mock("./utils", () => ({
  handleThemeChange: vi.fn(),
}));

describe("ThemeProvider", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it("provides the initial theme mode as an empty string", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-mode").textContent).toBe("");
  });

  it("changes theme mode when setMode is called", async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Simulate changing the theme mode
    act(() => {
      screen.getByTestId("change-theme-button").click();
    });

    expect(screen.getByTestId("theme-mode").textContent).toBe("dark");
    expect(handleThemeChange).toHaveBeenCalledTimes(2);
  });
});

// Helper component to test context functionality
function TestComponent() {
  const { mode, setMode } = useTheme();

  return (
    <>
      <span data-testid="theme-mode">{mode}</span>
      <button data-testid="change-theme-button" onClick={() => setMode("dark")}>
        Change Theme
      </button>
    </>
  );
}

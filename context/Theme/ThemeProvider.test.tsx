import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { ThemeProvider } from "./ThemeProvider";
import { handleThemeChange } from "./utils";
import { useTheme } from "./hooks";

vi.mock("./utils", () => ({
  handleThemeChange: vi.fn(),
}));

describe("ThemeProvider", () => {
  beforeEach(() => {
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

    act(() => {
      screen.getByTestId("change-theme-button").click();
    });

    expect(screen.getByTestId("theme-mode").textContent).toBe("dark");
    expect(handleThemeChange).toHaveBeenCalledTimes(2);
  });
});

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

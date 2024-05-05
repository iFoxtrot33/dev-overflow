import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { useTheme } from "./useTheme";

function TestComponent() {
  const theme = useTheme();
  return <div data-testid="theme">{JSON.stringify(theme)}</div>;
}

describe("useTheme", () => {
  it("throws an error when used outside of a ThemeProvider", () => {
    const mockConsoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const attemptToRender = () => {
      render(<TestComponent />);
    };
    expect(attemptToRender).toThrowError(
      "useTheme must be used within a ThemeProvider"
    );
    mockConsoleError.mockRestore();
  });
});

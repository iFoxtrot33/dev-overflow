import { render } from "@testing-library/react";
import { describe, it, expect, beforeAll, vi } from "vitest";
import { ThemeProvider } from "@/context/Theme/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

import { Navbar } from "./Navbar";

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual("next/navigation");
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
      replace: vi.fn(),
    })),
    usePathname: vi.fn(),
  };
});
describe("Navbar Component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider>
        <ClerkProvider>
          <Navbar />
        </ClerkProvider>
      </ThemeProvider>
    );
    expect(container).not.toBeNull();
  });
});

import { render } from "@testing-library/react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";

import { NavContent } from "./NavContent";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/current-route"),
}));

describe("NavContent Component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Sheet>
        <SheetContent>
          <NavContent />
        </SheetContent>
      </Sheet>
    );
    expect(container).not.toBeNull();
  });
});

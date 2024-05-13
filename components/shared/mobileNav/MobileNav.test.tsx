import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { MobileNav } from "./MobileNav";

describe("MobileNav Component", () => {
  it("renders correctly", () => {
    const { container } = render(<MobileNav />);
    expect(container).not.toBeNull();
  });
});

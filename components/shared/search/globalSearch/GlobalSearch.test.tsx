import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { GlobalSearch } from "./GlobalSearch";

describe("GlobalSearch Component", () => {
  it("renders correctly", () => {
    const { container } = render(<GlobalSearch />);
    expect(container).not.toBeNull();
  });
});

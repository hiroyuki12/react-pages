import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
describe("render Counter", () => {
  it("should render all elements", () => {
    render(<Counter />);

    expect(screen.getByText("mball")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});

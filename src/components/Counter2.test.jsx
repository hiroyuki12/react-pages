import { render, screen, fireEvent } from "@testing-library/react";
import { Counter2 } from "./Counter2";
describe("render Counter", () => {
  it("should count by button press", () => {
    render(<Counter2 />);

    //screen.debug();

    expect(screen.getByTestId("count-element")).toHaveTextContent('0');
    fireEvent.click(screen.getByRole("button", { name: "Increment value" }));
    fireEvent.click(screen.getByRole("button", { name: "Increment value" }));
    expect(screen.getByTestId("count-element")).toHaveTextContent('2');
    fireEvent.click(screen.getByRole("button", { name: "Decrement value" }));
    expect(screen.getByTestId("count-element")).toHaveTextContent('1');
  });
});

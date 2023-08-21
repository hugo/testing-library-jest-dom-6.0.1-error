import { render, screen } from "@testing-library/react";

import { App } from "./App";

test("it works", () => {
  render(<App />);

  let subject = screen.getByText("Hello");

  expect(subject).toBeInTheDocument();
});

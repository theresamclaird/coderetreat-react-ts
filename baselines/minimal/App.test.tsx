import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders coderetreat heading", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /coderetreat/i })).toBeInTheDocument();
});
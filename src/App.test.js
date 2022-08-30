import { render, screen } from "@testing-library/react";
import App from "./app/App";

  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
test.skip("renders learn react link", () => {
});

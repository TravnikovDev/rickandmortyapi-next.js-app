import { render, screen } from "@testing-library/react";
import Layout from "./index";
import "@testing-library/jest-dom/extend-expect";

describe("Layout", () => {
  it("renders the Layout component without a title", () => {
    render(<Layout>Test Content</Layout>);

    const title = screen.getByText("Rick and Morty App");
    expect(title).toBeInTheDocument();

    const content = screen.getByText("Test Content");
    expect(content).toBeInTheDocument();
  });

  it("renders the Layout component with a custom title", () => {
    render(<Layout title="Custom Title">Test Content</Layout>);

    const title = screen.getByText("Custom Title");
    expect(title).toBeInTheDocument();

    const content = screen.getByText("Test Content");
    expect(content).toBeInTheDocument();
  });
});

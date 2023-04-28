import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Filters from "./index";

describe("Filters", () => {
  const setFilters = jest.fn();

  beforeEach(() => {
    render(<Filters setFilters={setFilters} />);
  });

  it("renders the Species input field", () => {
    expect(screen.getByPlaceholderText("Species")).toBeInTheDocument();
  });

  it("renders the Type input field", () => {
    expect(screen.getByPlaceholderText("Type")).toBeInTheDocument();
  });

  it("renders the Status CustomSelectFilter", () => {
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  it("renders the Gender CustomSelectFilter", () => {
    expect(screen.getByText("Gender")).toBeInTheDocument();
  });

  it("calls setFilters with debounce on input change", async () => {
    fireEvent.change(screen.getByPlaceholderText("Species"), {
      target: { value: "Human" },
    });

    await new Promise((r) => setTimeout(r, 350));

    expect(setFilters).toHaveBeenCalledWith({ species: "Human" });
  });

  it("calls setFilters with debounce on CustomSelectFilter change", async () => {
    fireEvent.click(screen.getByText("Status"));
    fireEvent.click(screen.getByText("Alive"));

    await new Promise((r) => setTimeout(r, 350));

    expect(setFilters).toHaveBeenCalledWith({ status: "Alive" });
  });
});

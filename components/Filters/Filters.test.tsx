import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Filters, { emptyFilters } from "./index";

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

  it("should clear filters when 'Clear filters' button is clicked", async () => {
    // Fill the Species input field
    const speciesInput = screen.getByPlaceholderText("Species");
    fireEvent.change(speciesInput, { target: { value: "Human" } });

    // Select an option in the Status dropdown
    const statusDropdown = screen.getByText("Status");
    fireEvent.click(statusDropdown);
    const aliveOption = screen.getByText("Alive");
    fireEvent.click(aliveOption);

    // Click the "Clear filters" button
    const clearFiltersBtn = screen.getByTestId("clear-filters-btn");
    fireEvent.click(clearFiltersBtn);

    // Wait for the setFilters function to be called
    await waitFor(() => {
      expect(setFilters).toHaveBeenCalledWith(emptyFilters);
    });
  });
});

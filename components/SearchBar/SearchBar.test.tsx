import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from "./index";

describe("SearchBar", () => {
  const setSearchQuery = jest.fn();

  beforeEach(() => {
    render(<SearchBar setSearchQuery={setSearchQuery} />);
  });

  test("renders search input", () => {
    const searchInput = screen.getByTestId("search-name-input");
    expect(searchInput).toBeInTheDocument();
  });

  test("handles input change", async () => {
    const searchInput = screen.getByTestId("search-name-input");
    fireEvent.change(searchInput, { target: { value: "Rick" } });

    // Wait for the debounce to take effect
    await waitFor(() => {
      expect(setSearchQuery).toHaveBeenCalledTimes(1);
    });

    expect(setSearchQuery).toHaveBeenCalledWith("Rick");
  });

  test("debounces input changes", async () => {
    const searchInput = screen.getByTestId("search-name-input");
    fireEvent.change(searchInput, { target: { value: "R" } });
    fireEvent.change(searchInput, { target: { value: "Ri" } });
    fireEvent.change(searchInput, { target: { value: "Ric" } });
    fireEvent.change(searchInput, { target: { value: "Rick" } });

    // Wait for the debounce to take effect
    await waitFor(() => {
      expect(setSearchQuery).toHaveBeenCalledTimes(1);
    });

    expect(setSearchQuery).toHaveBeenCalledWith("Rick");
  });
});

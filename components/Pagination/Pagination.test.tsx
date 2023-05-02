// components/Pagination/Pagination.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "./index";

describe("Pagination", () => {
  const onPageChangeMock = jest.fn();

  beforeEach(() => {
    onPageChangeMock.mockClear();
  });

  test("renders current and total pages", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    const currentPage = screen.getByTestId("current-page");
    const totalPages = screen.getByTestId("total-pages");

    expect(currentPage).toHaveTextContent("3");
    expect(totalPages).toHaveTextContent("10");
  });

  test("clicking next button calls onPageChange with next page", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    const nextButton = screen.getByLabelText("Go to next page");
    fireEvent.click(nextButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });

  test("clicking previous button calls onPageChange with previous page", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    const prevButton = screen.getByLabelText("Go to previous page");
    fireEvent.click(prevButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  test("disables next button on last page", () => {
    render(
      <Pagination
        currentPage={10}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    const nextButton = screen.getByLabelText("Go to next page");

    expect(nextButton).toBeDisabled();
  });

  test("disables previous button on first page", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />
    );

    const prevButton = screen.getByLabelText("Go to previous page");

    expect(prevButton).toBeDisabled();
  });
});

import { Button, ButtonGroup, Text, Flex } from "@chakra-ui/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <ButtonGroup>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={isFirstPage}
        background="brand.primary"
        color="brand.text"
        _hover={{
          background: "brand.primary",
          opacity: 0.8,
        }}
        _active={{
          background: "brand.primary",
          opacity: 0.6,
        }}
        aria-label="Go to previous page"
      >
        Previous
      </Button>
      <Flex alignItems="center" justifyContent="center" mx={2}>
        <Text fontSize="xl" color="brand.text">
          <span aria-current="page" data-testid="current-page">{currentPage}</span> / <span data-testid="total-pages">{totalPages}</span>
        </Text>
      </Flex>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={isLastPage}
        background="brand.primary"
        color="brand.text"
        _hover={{
          background: "brand.primary",
          opacity: 0.8,
        }}
        _active={{
          background: "brand.primary",
          opacity: 0.6,
        }}
        aria-label="Go to next page"
      >
        Next
      </Button>
    </ButtonGroup>
  );
};

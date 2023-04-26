import { Button, ButtonGroup, Text } from "@chakra-ui/react";

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
      >
        Previous
      </Button>
      <Text fontSize="lg" mx={2} color={'white'}>
        {currentPage} / {totalPages}
      </Text>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={isLastPage}
      >
        Next
      </Button>
    </ButtonGroup>
  );
};

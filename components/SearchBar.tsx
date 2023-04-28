import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ setSearchQuery }) => {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  const [debouncedSearchValue] = useDebounce(searchValue, 500); // Adjust debounce time as needed

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchValue !== undefined) {
      setSearchQuery(debouncedSearchValue);
    }
  }, [debouncedSearchValue, setSearchQuery]);

  return (
    <InputGroup mb={10} mx="auto" borderRadius="md" boxShadow="xl">
      <InputLeftElement
        pointerEvents="none"
        paddingLeft={3}
        color="brand.secondary"
      >
        <SearchIcon />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search characters"
        value={searchValue}
        onChange={handleSearchChange}
        background="brand.background"
        borderColor="transparent"
        _hover={{
          borderColor: "brand.primary",
          boxShadow: "none",
        }}
        _focus={{
          borderColor: "brand.primary",
          boxShadow: "none",
        }}
        paddingLeft={10}
        color="brand.text"
        fontWeight="medium"
      />
    </InputGroup>
  );
};

export default SearchBar;

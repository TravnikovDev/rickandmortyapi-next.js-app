import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEvent, FC, useState } from "react";

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ setSearchQuery }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchQuery(searchValue);
  };

  return (
    <InputGroup
      mb={10}
      mx="auto"
      borderRadius="md"
      boxShadow="xl"
    >
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
        onSubmit={handleSearchSubmit}
        background="brand.background"
        borderColor="transparent"
        _hover={{
          borderColor: "transparent",
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

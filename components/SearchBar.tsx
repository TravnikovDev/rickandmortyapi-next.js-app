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
    console.log("Search submiterd")
    event.preventDefault();
    setSearchQuery(searchValue);
  };

  return (
    <InputGroup mb={10} maxW="lg" mx="auto">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search characters"
        value={searchValue}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
        background="rgba(255,255,255,0.75)"
      />
    </InputGroup>
  );
};

export default SearchBar;

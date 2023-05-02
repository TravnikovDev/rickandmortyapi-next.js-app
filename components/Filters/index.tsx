import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { CustomSelectFilter } from "./CustomSelectFilter";
import { useDebouncedCallback } from "use-debounce";

interface FiltersProps {
  setFilters: (newFilters: Record<string, string>) => void;
}

// We had to use Stub because we can't apply ChangeEvent to CustomSelectFilter
export interface ChangeEventStub {
  target: {
    name: string;
    value: string;
  };
}

export const emptyFilters = {
  status: "",
  species: "",
  gender: "",
  type: "",
};

const Filters: FC<FiltersProps> = ({ setFilters }) => {
  const [filters, setLocalFilters] =
    useState<Record<string, string>>(emptyFilters);

  const handleFilterChange = (event: ChangeEventStub) => {
    const { name, value } = event.target;
    const lowerName = name.toLocaleLowerCase();
    setFilters({
      [lowerName]: value,
    });
    setLocalFilters({
      ...filters,
      [lowerName]: value,
    });
  };

  const handleClearFilters = () => {
    setLocalFilters(emptyFilters);
    setFilters(emptyFilters);
  };

  // ! Had to drop support of debounce for filters to make "Clear button" works perfectly
  // const handleFilterChange = useDebouncedCallback(
  //   handleFilterChange,
  //   300
  // );

  return (
    <Box data-testid="filters-component">
      <Stack direction="row" spacing={4} mb={4}>
        <InputGroup borderRadius="md" boxShadow="xl" w={"50%"}>
          <InputLeftElement
            pointerEvents="none"
            paddingLeft={3}
            color="brand.secondary"
          >
            <SearchIcon />
          </InputLeftElement>
          <Input
            type="text"
            name="species"
            placeholder="Species"
            value={filters?.["species"]}
            onChange={handleFilterChange}
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
        <CustomSelectFilter
          takeAction={handleFilterChange}
          name="Status"
          options={["Alive", "Dead", "Unknown"]}
          selectedValue={filters?.["status"]}
        />
      </Stack>
      <Stack direction="row" spacing={4}>
        <InputGroup borderRadius="md" boxShadow="xl">
          <InputLeftElement
            pointerEvents="none"
            paddingLeft={3}
            color="brand.secondary"
          >
            <SearchIcon />
          </InputLeftElement>
          <Input
            type="text"
            name="type"
            placeholder="Type"
            value={filters?.["type"]}
            onChange={handleFilterChange}
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
        <CustomSelectFilter
          takeAction={handleFilterChange}
          name="Gender"
          options={["Male", "Female", "Genderless", "Unknown"]}
          selectedValue={filters?.["gender"]}
        />
      </Stack>
      <Button
        w={"100%"}
        mt={4}
        background="brand.primary"
        color="brand.text"
        opacity={filters === emptyFilters ? "0.3" : "0.9"}
        _hover={{
          background: "brand.primary",
        }}
        _active={{
          background: "brand.primary",
        }}
        onClick={handleClearFilters}
        data-testid="clear-filters-btn"
      >
        Clear filters
      </Button>
    </Box>
  );
};

export default Filters;

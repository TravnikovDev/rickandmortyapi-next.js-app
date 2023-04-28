import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { CustomSelectFilter } from "./CustomSelectFilter";
import { useDebouncedCallback } from 'use-debounce';

interface FiltersProps {
  setFilters: (newFilters: Record<string, string>) => void;
}

export interface ChangeEventStub {
  target: {
    name: string;
    value: string;
  };
}

const Filters: FC<FiltersProps> = ({ setFilters }) => {
  const [filters, setLocalFilters] = useState<Record<string, string>>();

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

  const debouncedHandleFilterChange = useDebouncedCallback(handleFilterChange, 300);

  return (
    <Box>
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
            onChange={debouncedHandleFilterChange}
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
          takeAction={debouncedHandleFilterChange}
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
            onChange={debouncedHandleFilterChange}
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
          takeAction={debouncedHandleFilterChange}
          name="Gender"
          options={["Male", "Female", "Genderless", "Unknown"]}
          selectedValue={filters?.["gender"]}
        />
      </Stack>
    </Box>
  );
};

export default Filters;

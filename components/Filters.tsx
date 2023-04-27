import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Select,
  useTheme,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { FC, ChangeEvent } from "react";

interface Filters {
  status: string;
  species: string;
  gender: string;
  type: string;
}

interface FiltersProps {
  setFilters: (newFilters: Record<string, string>) => void;
}

const Filters: FC<FiltersProps> = ({ setFilters }) => {
  const theme = useTheme();
  const handleFilterChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFilters({
      [name]: value,
    });
  };

  return (
    <Box>
      <Stack direction="row" spacing={4} mb={4}>
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
            name="species"
            placeholder="Species"
            onChange={handleFilterChange}
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
        <Select
          name="status"
          placeholder="Status"
          onChange={handleFilterChange}
          background="brand.background"
          borderColor="transparent"
          _hover={{
            borderColor: "transparent",
          }}
          _focus={{
            borderColor: "brand.primary",
            boxShadow: "none",
          }}
          color="brand.text"
          fontWeight="medium"
        >
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Select>
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
            onChange={handleFilterChange}
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
        <Select
          name="gender"
          placeholder="Gender"
          onChange={handleFilterChange}
          background="brand.background"
          borderColor="transparent"
          _hover={{
            borderColor: "transparent",
          }}
          _focus={{
            borderColor: "brand.primary",
            boxShadow: "none",
          }}
          color="brand.text"
          fontWeight="medium"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </Select>
      </Stack>
    </Box>
  );
};

export default Filters;

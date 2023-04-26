import { Box, Stack, Select } from "@chakra-ui/react";
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
  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters({
      [name]: value,
    });
  };

  return (
    <Box>
      <Stack direction="row" spacing={4}>
        <Select
          name="status"
          placeholder="Status"
          onChange={handleFilterChange}
        >
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Select>
        <Select
          name="species"
          placeholder="Species"
          onChange={handleFilterChange}
        >
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="robot">Robot</option>
        </Select>
        <Select
          name="gender"
          placeholder="Gender"
          onChange={handleFilterChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </Select>
        <Select name="type" placeholder="Type" onChange={handleFilterChange}>
          {/* Add more types if necessary */}
          <option value="parasite">Parasite</option>
          <option value="mythological">Mythological</option>
        </Select>
      </Stack>
    </Box>
  );
};

export default Filters;

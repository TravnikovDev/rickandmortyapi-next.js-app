import { NextPage } from "next";
import {
  Flex,
  Box,
  Spinner,
  Text,
  Heading,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import CharacterCard from "../components/CharacterCard";
import { Pagination } from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import { useCharacterList } from "../hooks/useCharacterList";
import Layout from "../components/Layout";

const HomePage: NextPage = () => {
  const {
    info,
    characterList,
    loading,
    error,
    handleSearchQueryChange,
    handleFiltersChange,
    handlePageChange,
    pageNumber,
  } = useCharacterList();

  let content;

  // Handling content render without affecting rest of layout
  if (loading) {
    content = (
      <Box textAlign="center" marginTop="4">
        <Spinner />
      </Box>
    );
  } else if (error || !characterList) {
    content = (
      <Box textAlign="center" marginTop="4">
        <Text>Error fetching characters.</Text>
      </Box>
    );
  } else {
    content = (
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={0} mt={"20%"}>
        {characterList.map((character) => (
          <CharacterCard key={character?.id} character={character || {}} />
        ))}
      </SimpleGrid>
    );
  }

  console.log(characterList);

  return (
    <Layout title="Characters">
      <SearchBar setSearchQuery={handleSearchQueryChange} />
      <Filters setFilters={handleFiltersChange} />
      {content}
      <Flex my={8} justifyContent="center" width="100%">
        <Pagination
          currentPage={pageNumber}
          totalPages={info?.pages || 1}
          onPageChange={handlePageChange}
        />
      </Flex>
    </Layout>
  );
};

export default HomePage;

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
  const characterListArray = Object.values(characterList);

  // Handling content render without affecting rest of layout
  if (loading) {
    content = (
      <Box textAlign="center" fontSize={48} fontWeight={"bold"} mt={56}>
        <Spinner size="xl" color="brand.primary" thickness="6px" speed="2s" />
      </Box>
    );
  } else if (error || !characterList) {
    content = (
      <Box textAlign="center" fontSize={48} fontWeight={"bold"} mt={56}>
        <Text>Error fetching characters.</Text>
      </Box>
    );
  } else if (characterListArray.length === 0) {
    content = (
      <Box textAlign="center" fontSize={48} fontWeight={"bold"} mt={56}>
        <Text>No characters found matching your search criteria.</Text>
      </Box>
    );
  } else {
    content = (
      <SimpleGrid minChildWidth="300px" spacing={4} mt={"20%"}>
        {characterListArray.map((character) => (
          <CharacterCard key={character?.id} character={character || {}} />
        ))}
      </SimpleGrid>
    );
  }

  return (
    <Layout title="The Rick and Morty characters">
      <Box margin="0 auto" marginTop="4" maxW={"xl"}>
        <SearchBar setSearchQuery={handleSearchQueryChange} />
        <Filters setFilters={handleFiltersChange} />
      </Box>
      {content}
      <Flex my={8} justifyContent="center" width="100%">
        {info && characterListArray.length > 0 && (
          <Pagination
            currentPage={pageNumber}
            totalPages={info?.pages || 1}
            onPageChange={handlePageChange}
          />
        )}
      </Flex>
    </Layout>
  );
};

export default HomePage;

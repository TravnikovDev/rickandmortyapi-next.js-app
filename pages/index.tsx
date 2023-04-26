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
    <Box
      minHeight="100vh"
      backgroundImage="url('https://wallpaperaccess.com/full/85334.jpg')"
      backgroundPosition="0 -400px"
      // backgroundSize="cover"
      backgroundColor="black"
      backgroundRepeat="no-repeat"
    >
      <Container maxW="container.xl" py={10}>
        <Heading
          as="h1"
          size="4xl"
          textAlign="center"
          mb={10}
          color="white"
          mt={"7.5%"}
        >
          Rick and Morty Characters
        </Heading>
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
      </Container>
    </Box>
  );
};

export default HomePage;

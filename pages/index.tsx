import { NextPage } from "next";
import { useGetCharactersQuery } from "../generated/graphql";
import { Box, VStack, Heading, Text, Spinner } from "@chakra-ui/react";
import Link from "next/link";

const HomePage: NextPage = () => {
  const { loading, error, data } = useGetCharactersQuery();

  if (loading) {
    return (
      <Box textAlign="center" marginTop="4">
        <Spinner />
      </Box>
    );
  }

  if (error || !data) {
    return (
      <Box textAlign="center" marginTop="4">
        <Text>Error fetching characters.</Text>
      </Box>
    );
  }

  const characters = data?.characters?.results;

  return (
    <Box>
      <Heading as="h1" textAlign="center" marginTop="4">
        Rick and Morty Characters
      </Heading>
      <VStack spacing={4} alignItems="center" marginTop="4">
        {characters?.map((character) => (
          <Link href={`/characters/${character?.id}`} key={character?.id}>
            <Text fontSize="xl">{character?.name}</Text>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default HomePage;

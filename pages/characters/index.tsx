import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useGetCharactersQuery } from '../../generated/graphql';

const Characters: NextPage = () => {
  const { loading, data } = useGetCharactersQuery();
  const characters = data?.characters?.results;

  return (
    <Box>
      <VStack spacing={6} alignItems="center">
        <Heading as="h1" size="2xl">
          Characters
        </Heading>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <SimpleGrid columns={[1, 2, 3]} spacing={10} w="100%">
            {characters?.map((character) => (
              <Box key={character?.id} borderWidth="1px" borderRadius="lg" p={4}>
                <Heading as="h2" size="md" mb={2}>
                  {character?.name}
                </Heading>
                <Text fontSize="sm">Species: {character?.species}</Text>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Box>
  );
};

export default Characters;

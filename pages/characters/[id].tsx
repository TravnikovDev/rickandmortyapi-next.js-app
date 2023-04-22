import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useGetCharacterByIdQuery } from "../../generated/graphql";

const CharacterDetails: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data } = useGetCharacterByIdQuery({
    variables: { id: id as string },
  });

  const character = data?.character;

  return (
    <Box>
      <VStack spacing={6} alignItems="center">
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Heading as="h1" size="2xl">
              {character?.name}
            </Heading>
            <Image
              src={character?.image ?? ""}
              alt={`${character?.name}`}
              boxSize="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text fontSize="xl">Species: {character?.species}</Text>
            <Text fontSize="xl">Status: {character?.status}</Text>
            <Text fontSize="xl">Origin: {character?.origin?.name}</Text>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default CharacterDetails;

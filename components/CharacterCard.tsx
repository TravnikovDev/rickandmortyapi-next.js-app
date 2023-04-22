import { Box, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Character } from "../generated/graphql";

interface CharacterCardProps {
  character: Partial<Character>;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Link href={`/characters/${character.id}`}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        _hover={{ boxShadow: "md" }}
        w="300px"
      >
        <Image src={`${character.image}`} alt={`${character.name}`} />
        <VStack p={4} spacing={2}>
          <Text fontSize="2xl" fontWeight="bold">
            {character.name}
          </Text>
          <Text fontSize="lg">Species: {character.species}</Text>
          <Text fontSize="lg">Status: {character.status}</Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default CharacterCard;

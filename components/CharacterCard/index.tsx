import { Box, Image, Text, VStack, Tag, HStack, Icon } from "@chakra-ui/react";
import { BiWorld, BiPlanet } from "react-icons/bi";
import { FaRegUserCircle, FaTransgender } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import { Character } from "../../generated/graphql";

interface CharacterCardProps {
  character: Partial<Character>;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const statusColor =
    character.status === "Alive" ? "brand.alive" : "brand.dead";

  return (
    <Link href={`/characters/${character.id}`}>
      <Box
        className="character-card"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        _hover={{ boxShadow: "md" }}
        w="300px"
        background={"brand.background"}
        data-testid="character-card"
      >
        <Image src={`${character.image}`} alt={`${character.name}`} />
        <VStack p={4} spacing={2} alignItems="start">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={"brand.text"}
            data-testid="character-name"
          >
            {character.name}
          </Text>
          <HStack spacing={2}>
            <Box bgColor={statusColor} borderRadius="50%" w="12px" h="12px" />
            <Tag
              size="sm"
              colorScheme="gray"
              borderRadius="full"
              data-testid="character-status"
            >
              {character.status}
            </Tag>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaTransgender} color={"brand.text"} />
            <Text
              fontSize="lg"
              color={"brand.text"}
              data-testid="character-gender"
            >
              Gender: {character.gender}
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaRegUserCircle} color={"brand.text"} />
            <Text
              fontSize="lg"
              color={"brand.text"}
              data-testid="character-species"
            >
              Species: {character.species}
            </Text>
          </HStack>

          <HStack spacing={2}>
            <Icon as={BiWorld} color={"brand.text"} />
            <Text
              fontSize="lg"
              color={"brand.text"}
              data-testid="character-origin"
            >
              Origin: {character.origin?.name}
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={MdLocationOn} color={"brand.text"} />
            <Text
              fontSize="lg"
              color={"brand.text"}
              data-testid="character-location"
            >
              Location: {character.location?.name || "Unknown"}
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={BiPlanet} color={"brand.text"} />
            <Text
              fontSize="lg"
              color={"brand.text"}
              data-testid="character-type"
            >
              Type: {character.type || "Unknown"}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Link>
  );
};

export default CharacterCard;

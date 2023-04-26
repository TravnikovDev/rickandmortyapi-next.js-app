import {
  Box,
  Image,
  Text,
  VStack,
  Tag,
  HStack,
  Icon,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import { BiWorld, BiPlanet } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import { Character } from "../generated/graphql";

interface CharacterCardProps {
  character: Partial<Character>;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const theme = useTheme();
  const textColor = useColorModeValue(theme.colors.brand.text, "white");

  const statusColor =
    character.status === "Alive"
      ? theme.colors.brand.alive
      : theme.colors.brand.dead;

  return (
    <Link href={`/characters/${character.id}`}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        _hover={{ boxShadow: "md" }}
        w="300px"
        background={theme.colors.brand.background}
      >
        <Image src={`${character.image}`} alt={`${character.name}`} />
        <VStack p={4} spacing={2} alignItems="start">
          <HStack spacing={2}>
            <Text fontSize="2xl" fontWeight="bold" color={textColor}>
              {character.name}
            </Text>
            <Tag size="sm" colorScheme="gray" borderRadius="full">
              {character.status}
            </Tag>
            <Box bgColor={statusColor} borderRadius="50%" w="4px" h="4px" />
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaRegUserCircle} color={textColor} />
            <Text fontSize="lg" color={textColor}>
              Species: {character.species}
            </Text>
          </HStack>

          <HStack spacing={2}>
            <Icon as={BiWorld} color={textColor} />
            <Text fontSize="lg" color={textColor}>
              Origin: {character.origin?.name}
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={MdLocationOn} color={textColor} />
            <Text fontSize="lg" color={textColor}>
              Location: {character.location?.name || "Unknown"}
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={BiPlanet} color={textColor} />
            <Text fontSize="lg" color={textColor}>
              Type: {character.type || "Unknown"}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Link>
  );
};

export default CharacterCard;

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Text,
  VStack,
  Spinner,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import {
  Character,
  GetAllCharactersIdsDocument,
  useGetCharacterByIdQuery,
} from "../../generated/graphql";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { editCharacter } from "../../store/characters/slice";
import { useDispatch } from "react-redux";
import { client } from "../_app";

const CharacterPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const { data, loading, error } = useGetCharacterByIdQuery({
    variables: { id: id as string },
  });

  const character = data?.character;

  // Local editing state
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(character?.name || "");

  // For initializing name field
  useEffect(() => {
    if (character?.name) setEditedName(character?.name);
  }, [character?.name]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    const newCharacter = { ...character } as Character; // Looks like GraphQL and Typecasting are synonyms
    newCharacter.name = editedName;
    dispatch(editCharacter({ id: `${id}`, character: newCharacter }));
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(event.target.value);
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Layout title={editedName}>
      <Box textAlign="center" marginTop="4">
        <HStack mb={4} spacing={4} w={"auto"}>
          <IconButton
            aria-label="Go back"
            icon={<ArrowBackIcon />}
            onClick={handleBackClick}
            colorScheme="brand"
            background="brand.primary"
            color="brand.text"
            _hover={{
              background: "brand.primary",
              opacity: 0.8,
            }}
            _active={{
              background: "brand.primary",
              opacity: 0.6,
            }}
            data-testid="back-button"
          />
          <Text fontSize="2xl" fontWeight="bold">
            Back to list
          </Text>
        </HStack>
        {loading && (
          <Spinner size="xl" color="brand.primary" thickness="6px" speed="2s" />
        )}
        {error && <p>Error fetching character</p>}
      </Box>
      {character && (
        <Box
          maxWidth="md"
          mx="auto"
          borderWidth={2}
          borderRadius="lg"
          borderColor="brand.primary"
          backgroundColor="brand.background"
          p={4}
          mt={4}
        >
          <VStack spacing={4} alignItems="center">
            <Image
              src={`${character.image}`}
              alt={`${character.name}`}
              borderRadius="full"
              borderWidth={4}
              borderColor="brand.primary"
              boxSize="200px"
            />
            {editing ? (
              <FormControl>
                <FormLabel htmlFor="name" color="brand.text">
                  Name
                </FormLabel>
                <Input
                  type="text"
                  id="name"
                  value={editedName}
                  onChange={handleNameChange}
                  background="brand.background"
                  borderColor="brand.primary"
                  color="brand.text"
                  fontWeight="medium"
                  data-testid="character-name-input"
                />
              </FormControl>
            ) : (
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="brand.text"
                data-testid="character-name"
              >
                {editedName}
              </Text>
            )}
            <Text fontSize="lg" color="brand.text">
              Species: {character.species}
            </Text>
            <Text fontSize="lg" color="brand.text">
              Status: {character.status}
            </Text>
            <Text fontSize="lg" color="brand.text">
              Origin: {character?.origin?.name}
            </Text>
            {!editing ? (
              <Button
                onClick={handleEditClick}
                bg="brand.secondary"
                data-testid="edit-character-btn"
              >
                Edit
              </Button>
            ) : (
              <Button
                onClick={handleSaveClick}
                bg="brand.primary"
                data-testid="save-character-btn"
              >
                Save
              </Button>
            )}
          </VStack>
        </Box>
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GetAllCharactersIdsDocument });

  const paths = data.characters.results.map((character: Character) => ({
    params: { id: character.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

// Anyway we need it to avoid Next.js errors
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {},
  };
};

export default CharacterPage;

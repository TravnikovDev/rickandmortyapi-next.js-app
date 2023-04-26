import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
} from "@chakra-ui/react";
import { useGetCharacterByIdQuery } from "../../generated/graphql";
import Layout from "../../components/Layout";
import { useState } from "react";

const CharacterPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useGetCharacterByIdQuery({
    variables: { id: id as string },
  });

  const character = data?.character;

  // Local editing state
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(character?.name || "");

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(event.target.value);
  };

  return (
    <Layout title={editedName}>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching character</p>}
      {character && (
        <Flex direction="column" alignItems="center">
          <Image src={`${character.image}`} alt={`${character.name}`} />
          {editing ? (
            <FormControl mt={4}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                type="text"
                id="name"
                value={editedName}
                onChange={handleNameChange}
              />
            </FormControl>
          ) : (
            <h2>{editedName}</h2>
          )}
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
          <p>Origin: {character?.origin?.name}</p>
          {!editing ? (
            <Button onClick={handleEditClick} mt={4}>
              Edit
            </Button>
          ) : (
            <Button onClick={handleSaveClick} mt={4}>
              Save
            </Button>
          )}
        </Flex>
      )}
    </Layout>
  );
};

export default CharacterPage;

import { useEffect } from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setCharacters, setSearchQuery } from "../store/characters/slice";
import {
  Box,
  Input,
  VStack,
  Spinner,
  Text,
  Heading,
  Container,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import CharacterCard from "../components/CharacterCard";
import { Character, useGetCharactersQuery } from "../generated/graphql";
import { SearchIcon } from "@chakra-ui/icons";

const HomePage: NextPage = () => {
  const { loading, error, data } = useGetCharactersQuery();
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.characters.list);
  const searchQuery = useSelector(
    (state: RootState) => state.characters.searchQuery
  );

  const { refetch } = useGetCharactersQuery({
    onCompleted: (data) => {
      const chars: any = data?.characters?.results || [];
      dispatch(setCharacters(chars as Character[]));
    },
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  useEffect(() => {
    refetch({ name: searchQuery });
  }, [searchQuery, refetch]);

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

  console.log(data);

  return (
    <Box
      minHeight="100vh"
      backgroundImage="url('https://wallpaperaccess.com/full/85334.jpg')"
      backgroundPosition="0 -20%"
      backgroundSize="contain"
      backgroundColor="black"
      backgroundRepeat="no-repeat"
    >
      <Container maxW="container.xl" py={10}>
        <Heading as="h1" size="4xl" textAlign="center" mb={10} color="white" mt={"7.5%"}>
          Rick and Morty Characters
        </Heading>
        <InputGroup mb={10} maxW="lg" mx="auto">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search for a character"
            value={searchQuery}
            onChange={handleSearch}
          />
        </InputGroup>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} mt={"20%"}>
          {characters.map((character) => (
            <CharacterCard key={character?.id} character={character || {}} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HomePage;

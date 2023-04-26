import { useDispatch, useSelector } from "react-redux";
import { Character, useGetCharactersQuery } from "../generated/graphql";
import { RootState } from "../store/store";
import { setCharacters } from "../store/characters/slice";
import {
  setSearchQuery,
  setFilters,
  setPageNumber,
  selectCharacterListState,
  CharacterListState,
} from "../store/characterList/slice";
import { useEffect } from "react";

export const useCharacterList = () => {
  const dispatch = useDispatch();
  const { searchQuery, filters, pageNumber } = useSelector(
    selectCharacterListState
  );
  const characterList = useSelector(
    (state: RootState) => state.characters.list
  );

  // Data fetching initialization
  const { refetch, loading, error, data } = useGetCharactersQuery({
    variables: {
      page: pageNumber,
      name: searchQuery,
      status: filters.status,
      species: filters.species,
      gender: filters.gender,
      type: filters.type,
    },
    onCompleted: (data) => {
      // Had to make type casting because of issues in Rick&Morty Api Schema
      const chars: any = data?.characters?.results || [];
      dispatch(setCharacters(chars as Character[]));
    },
  });

  const handleSearchQueryChange = (query: string) => {
    dispatch(setSearchQuery(query));
    dispatch(setPageNumber(1));
  };

  const handleFiltersChange = (newFilters: Record<string,string>) => {
    dispatch(setFilters(newFilters as CharacterListState["filters"]));
    dispatch(setPageNumber(1));
  };

  const handlePageChange = (newPage: number) => {
    dispatch(setPageNumber(newPage));
  };

  // Refetching part
  useEffect(() => {
    refetch({
      name: searchQuery,
      page: pageNumber,
      status: filters.status,
      species: filters.species,
      gender: filters.gender,
      type: filters.type,
    });
  }, [
    searchQuery,
    refetch,
    pageNumber,
    filters.status,
    filters.species,
    filters.gender,
    filters.type,
  ]);

  return {
    characterList,
    error,
    loading,
    pageNumber,
    handleSearchQueryChange,
    handleFiltersChange,
    handlePageChange,
    info: data?.characters?.info
  };
};

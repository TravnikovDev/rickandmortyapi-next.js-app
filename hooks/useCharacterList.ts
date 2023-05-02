import { useDispatch, useSelector } from "react-redux";
import { Character, useGetCharactersQuery } from "../generated/graphql";
import { setCharacters } from "../store/characters/slice";
import {
  setSearchQuery,
  setFilters,
  setPageNumber,
  selectCharacterListState,
  CharacterListState,
} from "../store/characterList/slice";
import { useCallback, useEffect } from "react";
import { selectMergedCharacters } from "../store/characters/selectors";

export const useCharacterList = () => {
  const dispatch = useDispatch();
  const { searchQuery, filters, pageNumber } = useSelector(
    selectCharacterListState
  );
  const characterList = useSelector(selectMergedCharacters);

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

  const handleSearchQueryChange = useCallback(
    (query: string) => {
      console.info("handleSearchQueryChange", query);
      dispatch(setSearchQuery(query));
      if (pageNumber > 1) dispatch(setPageNumber(1));
    },
    // To avoid issue related to pagination
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const handleFiltersChange = useCallback(
    (newFilters: Record<string, string>) => {
      console.info("handleFiltersChange", newFilters);
      dispatch(setFilters(newFilters as CharacterListState["filters"]));
      if (pageNumber > 1) dispatch(setPageNumber(1));
    },
    [dispatch, pageNumber]
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      console.info("handlePageChange", newPage);
      dispatch(setPageNumber(newPage));
    },
    [dispatch]
  );

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
    info: data?.characters?.info,
  };
};

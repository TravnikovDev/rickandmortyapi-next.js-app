import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, Maybe } from "../../generated/graphql";

interface CharactersState {
  list: Character[];
  searchQuery: string;
}

const initialState: CharactersState = {
  list: [],
  searchQuery: "",
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.list = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setCharacters, setSearchQuery } = charactersSlice.actions;

export default charactersSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, Maybe } from "../../generated/graphql";

interface CharactersState {
  list: Record<string, Partial<Character>>;
  editedCharacters: Record<string, Partial<Character>>;
}

const initialState: CharactersState = {
  list: {},
  editedCharacters: {},
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Partial<Character[]>>) => {
      state.list = action.payload.reduce((obj, character) => {
        if (character) {
          return Object.assign(obj, { [`${character.id}`]: character });
        } else {
          return {};
        }
      }, {});
    },
    editCharacter: (
      state,
      action: PayloadAction<{ id: string; character: Partial<Character> }>
    ) => {
      const { id, character } = action.payload;
      state.editedCharacters[id] = character;
    },
  },
});

export const { setCharacters, editCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;

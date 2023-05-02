// In store/characters/selectors.ts
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Character } from "../../generated/graphql";

const selectCharacters = (state: RootState) => state.characters.list;
const selectEditedCharacters = (state: RootState) =>
  state.characters.editedCharacters;

export const selectMergedCharacters = createSelector(
  [selectCharacters, selectEditedCharacters],
  (characters, editedCharacters) => {
    const mergedCharacters: Record<string, Partial<Character>> = {
      ...characters,
    };

    Object.keys(characters).forEach((id) => {
      mergedCharacters[id] = {
        ...mergedCharacters[id],
        ...editedCharacters[id],
      };
    });

    return mergedCharacters;
  }
);

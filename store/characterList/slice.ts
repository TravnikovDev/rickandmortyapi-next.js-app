import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CharacterListState {
  searchQuery: string;
  filters: {
    status: string;
    species: string;
    gender: string;
    type: string;
  };
  pageNumber: number;
}

const initialState: CharacterListState = {
  searchQuery: '',
  filters: {
    status: '',
    species: '',
    gender: '',
    type: '',
  },
  pageNumber: 1,
};

export const characterListSlice = createSlice({
  name: 'characterList',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilters: (state, action: PayloadAction<CharacterListState['filters']>) => {
      state.filters = action.payload;
    },
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setSearchQuery, setFilters, setPageNumber } = characterListSlice.actions;

export const selectCharacterListState = (state: RootState) => state.characterList;

export default characterListSlice.reducer;

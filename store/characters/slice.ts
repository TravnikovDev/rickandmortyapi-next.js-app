import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CharactersState {
  data: any[];
}

const initialState: CharactersState = {
  data: [],
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;

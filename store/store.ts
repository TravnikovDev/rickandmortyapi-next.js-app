import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./characters/slice";
import characterListReducer from './characterList/slice';

const rootReducer = {
  characterList: characterListReducer,
  characters: charactersReducer,
  // Add your other reducers here
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

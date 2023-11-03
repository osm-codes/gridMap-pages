import { configureStore } from '@reduxjs/toolkit';
import mapReducer from './mapSlice';

export const store = configureStore({
  reducer: {
    map: mapReducer,
    // other slices can be added here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

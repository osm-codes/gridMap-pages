import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MapState {
  coordinates: number[];
  zoom: number;
}

export const initialState: MapState = {
  coordinates: [0, 0],
  zoom: 2,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCoordinates: (state, action: PayloadAction<number[]>) => {
      state.coordinates = action.payload;
    },
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
    // other reducers can be added here
  },
});

export const { setCoordinates, setZoom } = mapSlice.actions;
export default mapSlice.reducer;

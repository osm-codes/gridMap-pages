import React, { createContext, useReducer, useState, useContext } from 'react';
import mapReducer, { setCoordinates, setZoom, initialState as mapInitialState, MapState } from '../store/mapSlice';

interface MapContextProps {
  state: MapState;
  dispatch: React.Dispatch<any>;
  coordinates: number[];
  setCoordinates: (coords: number[]) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
}

// Create the context with a default value
const MapContext = createContext<MapContextProps>({
  state: mapInitialState,
  dispatch: () => null,
  coordinates: mapInitialState.coordinates,
  setCoordinates: () => {},
  zoom: mapInitialState.zoom,
  setZoom: () => {},
});

// Create a provider component
export const MapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, mapInitialState);
  const [coordinates, setCoordinates] = useState<number[]>(mapInitialState.coordinates);
  const [zoom, setZoom] = useState<number>(mapInitialState.zoom);

  const value = { state, dispatch, coordinates, setCoordinates, zoom, setZoom };

  return (
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  );
};

// Hook to use the map context
export const useMapContext = () => {
  const context = useContext(MapContext);
  if (context === null) {
    throw new Error('useMapContext must be used within a MapProvider');
  }
  return context;
};

import React, { useEffect } from 'react';
import OpenLayersMap from './OpenLayersMap';
import { useMapContext } from '../contexts/MapContext';

const MainMap: React.FC = () => {
  const { state, dispatch } = useMapContext();

  // Logic for interacting with the map state and dispatch here
  useEffect(() => {
    // Initialize map related state here
  }, [dispatch]);

  return (
    <div>
      <OpenLayersMap />
    </div>
  );
};

export default MainMap;

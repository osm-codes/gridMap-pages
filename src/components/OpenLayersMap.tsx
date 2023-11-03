import React, { useEffect, useRef } from 'react';
import { useMapContext } from '../contexts/MapContext';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const OpenLayersMap: React.FC = () => {
  const { coordinates, zoom } = useMapContext();
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapElement.current) {
      const map = new Map({
        target: mapElement.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: coordinates,
          zoom: zoom,
        }),
      });

      return () => map.setTarget(undefined);
    }
  }, [coordinates, zoom]);

  return <div ref={mapElement} className="map-container"></div>;
};

export default OpenLayersMap;

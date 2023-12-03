/// <reference lib="dom" />
//import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render, screen } from '@testing-library/react';
import MainMap from '../../components/MainMap';
import { MapProvider } from '../../contexts/MapContext';
import '../../utils/testSetup';

describe('MainMap component', () => {
  it('renders OpenLayersMap component', () => {
    render(
        <MapProvider>
            <MainMap />
        </MapProvider>
    );
    expect(screen.getByTestId('map-container')).toBeTruthy();
  });
});

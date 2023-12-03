//import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render, screen } from '@testing-library/react';
import OpenLayersMap from '../../components/OpenLayersMap';
import '../../utils/testSetup';

describe('OpenLayersMap component', () => {
  it('creates a map instance on render', () => {
    render(
      <OpenLayersMap />
    );
    expect(screen.getByTestId('ol-map-container')).toBeTruthy();
  });
});

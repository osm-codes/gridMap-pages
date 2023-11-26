/// <reference lib="dom" />
import React from 'react';
//import { describe, it, test, expect, beforeEach, afterEach } from 'bun:test';
import { render, screen } from '@testing-library/react';
import App from '../../components/App';
import '../../utils/testSetup';


describe('App component', () => {
  afterEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('renders HomePage for / route', () => {
    render(
      <App />
    );
    expect(screen.getByText('Home Page')).toBeTruthy();
  });

  it('renders AboutPage for /about route', () => {
    window.history.pushState({}, 'About Page', '/about');
    render(
      <App />
    );
    expect(screen.getByText('About Page')).toBeTruthy();
  });

  it('renders HomePage as default fallback route', () => {
    window.history.pushState({}, '', '/unknown');
    render(
      <App />
    );
    expect(screen.getByText('Home Page')).toBeTruthy();
  });
});

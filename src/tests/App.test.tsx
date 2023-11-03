/// <reference lib="dom" />
import { test, expect } from 'bun:test';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders and checks if body exists', () => {
  render(<App />);
  const body = document.body;
  expect(body).toBeDefined();
});
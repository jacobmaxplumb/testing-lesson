import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without any errors', () => {
  render(<App />);
});

test('that the title Space Missions Exists', () => {
  render(<App />);
  let title = screen.queryByText(/space missions/i);
  expect(title).not.toBeNull();
})
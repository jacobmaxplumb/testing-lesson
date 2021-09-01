import React from 'react';
import { fireEvent, render, screen, wait } from '@testing-library/react';
import App from './App';

import mockFetchMissions from './api/fetchMissions';
jest.mock('./api/fetchMissions');

test('renders without any errors', () => {
  render(<App />);
});

test('that the title Space Missions Exists', () => {
  render(<App />);
  let title = screen.queryByText(/space missions/i);
  expect(title).not.toBeNull();
})

test('fetches and renders mission data', async () => {
  render(<App />);
  mockFetchMissions.mockResolvedValueOnce({
    data: [
      {mission_name: 'Mission 1', mission_id: "Mission 1"},
      {mission_name: 'Mission 2', mission_id: "Mission 2"}
    ]
  })

  const button = screen.getByRole("button");
  fireEvent.click(button);

  await wait();

  expect(screen.getAllByTestId("mission")).toHaveLength(2);
})

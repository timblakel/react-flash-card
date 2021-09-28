import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('title is visible', () => {
  render(<App />);
  const titleElement = screen.getByText("Study Flash Cards");
  expect(titleElement).toBeInTheDocument();
});

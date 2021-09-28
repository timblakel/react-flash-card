import React from 'react';
import { render, screen } from '@testing-library/react';
import {fireEvent, within} from '@testing-library/dom'
import App from './App';

test('title is visible', () => {
  render(<App />);
  const titleElement = screen.getByText("Study Flash Cards");
  expect(titleElement).toBeInTheDocument();
});

test('card is visible', ()=> {
  render(<App />);
  const cardElement = screen.getByTestId("flashcard");
  expect(cardElement).toBeInTheDocument();
});

test('front of card is showing on startup', () => {
  render(<App />);
  const cardElement = screen.getByTestId("flashcard");
  expect(within(cardElement).getByText('Flashcard Front'));
});

test('back of card shows on Flip Card button click', async () => {
  render(<App />);

   // Maybe replace this with testID
  const flipCardButton = screen.getByText("Flip Card");
  fireEvent.click(flipCardButton);

  const cardBack = await within(screen.getByTestId("flashcard")).findByText("Flashcard Back");
  expect(cardBack).toBeInTheDocument();
});


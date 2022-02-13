import React from 'react';
import { render, screen } from "@testing-library/react";
import App from './App';

test('renders search input element', () => {
  render(<App />);
  const inputTextPlaceholder = screen.getByPlaceholderText("Search Store Name or Postcode");
  expect(inputTextPlaceholder).toBeInTheDocument();
});

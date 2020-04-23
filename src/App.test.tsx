import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders landing page link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ABOUT SOMUL/i);
  expect(linkElement).toBeInTheDocument();
});

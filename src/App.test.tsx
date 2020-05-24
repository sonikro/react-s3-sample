import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  const title = getByText(/This is a sample webpage to test serverless webpages/i);
  expect(linkElement).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

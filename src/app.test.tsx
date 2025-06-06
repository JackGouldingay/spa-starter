import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './app';

test('has two tools links', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const link1Element = screen.getByText(/tool 1/i);
  const link2Element = screen.getByText(/tool 2/i);
  expect(link1Element).toBeInTheDocument();
  expect(link2Element).toBeInTheDocument();
});
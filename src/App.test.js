import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WeatherData App', () => {
  render(<App />);
  const headerElement = screen.getByTestId('header')
  expect(headerElement).toBeInTheDocument();
});

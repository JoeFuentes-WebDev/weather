import { render, screen } from '@testing-library/react';
import { ZipNotFound } from '../components/ZipNotFound';

test('renders ZipNotFound Component', () => {
    render(<ZipNotFound />);
    const headerElement = screen.getByTestId('zipNotFound')
    expect(headerElement).toBeInTheDocument();
});

test('renders ZipNotFound  with correct zipcode', () => {
    render(<ZipNotFound zipCode='12345' />);
    const headerElement = screen.getByTestId('zipNotFound')
    expect(headerElement.innerHTML).toContain('12345');
});

test('renders ZipNotFound with correct zipcode', () => {
    render(<ZipNotFound zipCode='56789' />);
    const headerElement = screen.getByTestId('zipNotFound')
    expect(headerElement.innerHTML).not.toContain('12345');
});
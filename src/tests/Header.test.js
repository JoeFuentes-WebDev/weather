import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

test('renders Header Component', () => {
    render(<Header city='Los Angeles' state='CA' />);
    const headerElement = screen.getByTestId('appHeader')
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.innerHTML).not.toContain('Los Angeles');
});
import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import Home from '@/app/page';

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: /react avançado/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
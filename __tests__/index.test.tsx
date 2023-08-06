import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import Home from '@/app/page';

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: /welcome to next\.js!/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
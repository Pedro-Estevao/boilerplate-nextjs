import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import Main from '@/components/Main';

describe('<Main />', () => {
	it('should render the heading', () => {
		// renderiza o component
		const { container } = render(<Main />);

		// busca o elemento e verifica a existência dele
		expect(
			screen.getByRole('heading', { name: /react avançado/i })
		).toBeInTheDocument();

		// gerar snapshot
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render the colors correctly', () => {
		// renderiza o component
		const { container } = render(<Main />);

		// verifica se o background-color está correto
		expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
	});
});

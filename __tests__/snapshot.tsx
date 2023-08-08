import { render } from "@testing-library/react";
import Home from "@/app/page";
import { expect } from "@jest/globals";

it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
});

it('should render the colors correctly', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toHaveStyle({
        'background-color': '#06092b'
    });
});
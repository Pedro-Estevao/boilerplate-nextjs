import { render } from "@testing-library/react";
import Home from "@/app/page";
import { expect } from "@jest/globals";

it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
});
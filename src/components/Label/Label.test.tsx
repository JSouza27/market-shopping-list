import { render, screen } from '@testing-library/react';

import Label from '.';

describe('<Label />', () => {
  it('should render the Label', () => {
    render(<Label htmlFor="Item">Item</Label>);

    const label = screen.getByText(/Item/i);
    expect(label).toBeInTheDocument();
  });
});

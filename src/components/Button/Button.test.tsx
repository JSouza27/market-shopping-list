import { render, screen } from '@testing-library/react';
import { Plus } from 'lucide-react';

import Button from '.';

describe('<Button />', () => {
  it('should render the button', () => {
    render(<Button icon={<Plus />} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});

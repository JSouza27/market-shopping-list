import { render, screen } from '@testing-library/react';
import { Sandwich } from 'lucide-react';

import Tag from '.';

describe('<Tag />', () => {
  it('should render the Tag', () => {
    render(<Tag color="blue" text="bebida" />);

    const tag = screen.getByText('bebida');

    expect(tag).toBeInTheDocument();
  });
  it('should render the Icon', () => {
    const { container } = render(
      <Tag color="blue" text="bebida" icon={<Sandwich size={16} />} />
    );

    const icon = container.querySelector('.lucide-sandwich');

    expect(icon).toBeInTheDocument();
  });
});

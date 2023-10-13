import { render, screen } from '@testing-library/react';
import { Sandwich } from 'lucide-react';

import Tag from '.';

describe('<Tag />', () => {
  it('should render the Tag', () => {
    render(<Tag color="blue">bebida</Tag>);

    const tag = screen.getByText('bebida');

    expect(tag).toBeInTheDocument();
  });

  it('should render the Icon', () => {
    const { container } = render(
      <Tag color="blue" icon={<Sandwich size={16} />}>
        bebida
      </Tag>
    );

    const icon = container.querySelector('.lucide-sandwich');

    expect(icon).toBeInTheDocument();
  });
});

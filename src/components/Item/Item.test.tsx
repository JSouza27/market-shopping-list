import { render, screen } from '@testing-library/react';
import { Apple } from 'lucide-react';

import Item from '.';

describe('<Item />', () => {
  it('should render the item', () => {
    render(
      <Item
        label="Banana"
        quantity={6}
        category={{
          color: 'orange',
          icon: <Apple size={16} />,
          name: 'fruta'
        }}
      />
    );

    const item = screen.getByText(/Banana/i);
    const units = screen.getByText(/6 unidades/i);
    const tag = screen.getByText(/fruta/i);
    const checkbox = screen.getByRole('checkbox');
    const button = screen.getByRole('button');

    expect(item).toBeInTheDocument();
    expect(units).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should change the text to "units" if the quantity is more than 1', () => {
    render(
      <Item
        label="Maçã"
        quantity={2}
        category={{
          color: 'orange',
          icon: <Apple size={16} />,
          name: 'fruta'
        }}
      />
    );

    const units = screen.getByText(/2 unidades/i);
    expect(units).toBeInTheDocument();
  });

  it('should change the text to "unit" if the quantity is less than or equal to 1', () => {
    render(
      <Item
        label="Maçã"
        quantity={1}
        category={{
          color: 'orange',
          icon: <Apple size={16} />,
          name: 'fruta'
        }}
      />
    );

    const units = screen.getByText(/1 unidade/i);
    expect(units).toBeInTheDocument();
  });
});

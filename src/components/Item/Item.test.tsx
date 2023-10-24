import { render, screen } from '../../utils/test-utils';

import { Item } from './';

describe('<Group />', () => {
  it('should render the Group', () => {
    render(
      <Item.Group checked={false}>
        <span>Hello World</span>
      </Item.Group>
    );

    const children = screen.getByText(/hello world/i);
    expect(children).toBeInTheDocument();
  });
});

describe('<Label />', () => {
  it('should render the Label', () => {
    render(
      <Item.Label checked={false}>
        <span>Hello Label</span>
      </Item.Label>
    );

    const children = screen.getByText(/hello label/i);
    expect(children).toBeInTheDocument();
  });
});

describe('<Description />', () => {
  it('should render the Description', () => {
    render(
      <Item.Description>
        <span>Hello Description</span>
      </Item.Description>
    );

    const children = screen.getByText(/hello description/i);
    expect(children).toBeInTheDocument();
  });
});

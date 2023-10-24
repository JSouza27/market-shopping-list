import { render } from '../../utils/test-utils';
import user from '@testing-library/user-event';

import Input from '.';

describe('<Input />', () => {
  it('should render the input', () => {
    const { container } = render(<Input id="item" name="item" />);

    const input = container.querySelector('#item');
    expect(input).toBeInTheDocument();
  });

  it('should be possible to type in input', async () => {
    const { container } = render(<Input id="item" name="item" />);

    const input = container.querySelector('#item');

    expect(input).toBeInTheDocument();
    await user.type(input!, 'Maçã');
    expect(input).toHaveValue('Maçã');
  });

  it('should be possible to pass the value and a function through props', async () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Input id="item" name="item" value="Laranja" onChange={handleChange} />
    );

    const input = container.querySelector('#item');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('Laranja');
    await user.type(input!, 'test');
    expect(handleChange).toHaveBeenCalled();
  });
});

import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    const onChange = jest.fn();
    render(<Checkbox checked={false} handleChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveProperty('checked', false);
  });

  it('should change the checked property to true when clicking', async () => {
    const onChange = jest.fn();
    render(<Checkbox checked={false} handleChange={onChange} />);

    await user.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});

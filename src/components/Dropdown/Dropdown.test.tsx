import { render, screen } from '@testing-library/react';

import Dropdown from '.';

describe('<Dropdown  />', () => {
  beforeEach(() => {
    render(
      <Dropdown title="Selecione uma categoria">
        <span>conteúdo</span>
      </Dropdown>
    );
  });

  it('should render the title', () => {
    const title = screen.getByText(/Selecione uma categoria/i);
    expect(title).toBeInTheDocument();
  });

  it('should handle open/close dropdown', async () => {});
});

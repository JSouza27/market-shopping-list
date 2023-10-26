import { render, screen } from '@testing-library/react';

import ListBox from '.';

describe('<ListBox />', () => {
  const unitSelectedMock = {
    id: '1',
    name: 'UN',
    label: 'unidade'
  };
  const handleUnitChangeMock = jest.fn();
  const unitsMock = [
    {
      id: '1',
      name: 'UN',
      label: 'unidade'
    },
    {
      id: '2',
      name: 'L',
      label: 'litro'
    },
    {
      id: '3',
      name: 'KG',
      label: 'Kg'
    }
  ];

  it('should display a button with the content', () => {
    render(
      <ListBox
        selectedContent={unitSelectedMock}
        handleSetSelectet={handleUnitChangeMock}
        contents={unitsMock}
        customClass="rounded-s-none"
      />
    );

    const button = screen.getByText(/un/i);
    expect(button).toBeInTheDocument();
  });
});

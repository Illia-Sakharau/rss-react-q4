import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC, ReactElement, useState } from 'react';
import * as TEST_DATA from '../../../test/testData';
import MSearchBar from './SearchBar';

const actionTest = vi.fn((val: string) => val);

const WrapperWithState: FC = (): ReactElement => {
  const [searchText, setSearchText] = useState('');

  return (
    <div data-testid="test-wrapper">
      <MSearchBar
        action={actionTest}
        searchText={searchText}
        setSearchText={setSearchText}
      />
    </div>
  );
};

describe('Pagination', () => {
  it('There is a working input and a button', async () => {
    render(<WrapperWithState />);

    const inputEl = screen.getByPlaceholderText(
      'Type art name, artist or date...'
    );
    const buttonEl = screen.getByRole('button', { name: 'Search' });

    expect(inputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();

    await userEvent.type(inputEl, TEST_DATA.text);
    await userEvent.click(buttonEl);

    expect(actionTest).toHaveBeenCalledOnce();
    expect(actionTest).toHaveLastReturnedWith(TEST_DATA.text);
  });
});

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as TEST_DATA from '../../../test/testData';
import SearchBar from './SearchBar';
import { GalleyContext } from '../../../pages/gallery/context';

const actionTest = vi.fn((val: string) => val);

describe('Serch bar', () => {
  it('There is a working input and a button', async () => {
    render(
      <GalleyContext.Provider value={TEST_DATA.galleyContextTestData}>
        <SearchBar action={actionTest} />
      </GalleyContext.Provider>
    );
    const inputEl = screen.getByPlaceholderText(
      'Type art name, artist or date...'
    );

    const buttonEl = screen.getByRole('button', { name: 'Search' });
    expect(inputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
    await userEvent.click(buttonEl);
    expect(actionTest).toHaveBeenCalledOnce();
    expect(actionTest).toHaveLastReturnedWith('Search text');
  });
});

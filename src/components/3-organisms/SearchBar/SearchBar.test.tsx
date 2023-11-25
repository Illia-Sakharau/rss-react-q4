import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from '@/test/createMockRouter';

const actionTest = vi.fn();

describe('Serch bar', () => {
  it('There is a working input and a button', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({ push: actionTest })}>
        <SearchBar searchText={''} />
      </RouterContext.Provider>
    );
    const inputEl = screen.getByPlaceholderText(
      'Type art name, artist or date...'
    );
    const buttonEl = screen.getByRole('button', { name: 'Search' });

    expect(inputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
    await userEvent.type(inputEl, 'Search text');
    await userEvent.click(buttonEl);
    expect(actionTest).toHaveBeenCalledOnce();
  });
});

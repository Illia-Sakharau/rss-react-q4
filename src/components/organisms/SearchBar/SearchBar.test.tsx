import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/store';

const store = setupStore();
const actionTest = vi.fn((val: string) => val);

describe('Serch bar', () => {
  it('There is a working input and a button', async () => {
    render(
      <Provider store={store}>
        <SearchBar action={actionTest} />
      </Provider>
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
    expect(actionTest).toHaveLastReturnedWith('Search text');
  });
});

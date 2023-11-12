import { SpyInstance, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';
import { MemoryRouter } from 'react-router-dom';
import * as TEST_DATA from '../../test/testData';
import userEvent from '@testing-library/user-event';

const ls: {
  [key in string]: string;
} = {
  searchText: 'initial-value',
};
const triger = vi.fn();
vi.mock('../../../API/GetCollection', async () => {
  return {
    default: {
      getArtworks: async (limit: number, page: number, IDs: number[]) => {
        const responseData = {
          data: TEST_DATA.responseArtworsInfo.filter(
            (art) => art.id === IDs[0]
          ),
        };
        triger();
        return responseData;
      },
      getSearchArtworks: async () => {
        const responseData = {
          data: TEST_DATA.responseArtworsInfo,
        };
        triger();
        return responseData;
      },
    },
  };
});

const lsGet = (
  vi.spyOn(Storage.prototype, 'getItem') as SpyInstance<
    Array<string>,
    string | null
  >
).mockImplementation((key: string) => ls[key] || null);
const lsSet = (
  vi.spyOn(Storage.prototype, 'setItem') as SpyInstance<
    Array<string>,
    void | null
  >
).mockImplementation((key: string, value: string) => {
  ls[key] = value;
});

describe('Gallery page', () => {
  it('Check localStorag retrieves/save search text', async () => {
    render(
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    );

    const searchBtnEl = screen.getByRole('button', { name: 'Search' });
    const searchInputEl = screen.getByPlaceholderText(
      'Type art name, artist or date...'
    ) as HTMLInputElement;

    expect(screen.getByText('Artworks')).toBeInTheDocument();
    expect(searchBtnEl).toBeInTheDocument();

    expect(searchInputEl.value).toBe('initial-value');

    await userEvent.clear(searchInputEl);
    await userEvent.type(searchInputEl, 'new-value');
    await userEvent.click(searchBtnEl);

    expect(lsGet).toHaveBeenCalled();
    expect(lsSet).toHaveBeenCalled();
    expect(ls.searchText).toBe('new-value');
  });
});

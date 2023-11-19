import { SpyInstance, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ArtAsideWidget from '../../components/organisms/ArtAsideWidget/ArtAsideWidget';
import { setupStore } from '../../store/store';
import { Provider } from 'react-redux';

const ls: {
  [key in string]: string;
} = {
  searchText: 'initial-value',
};

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

const store = setupStore();
const routes = [
  {
    path: '/gallery',
    element: (
      <Provider store={store}>
        <Gallery />
      </Provider>
    ),
    children: [
      {
        path: '/gallery/:artID',
        element: <ArtAsideWidget />,
      },
    ],
  },
];
const router = createMemoryRouter(routes, {
  initialEntries: ['/gallery'],
});

describe('Gallery page', () => {
  it('pagination update URL query', async () => {
    render(<RouterProvider router={router} />);

    expect(new URLSearchParams(router.state.location.search).get('page')).toBe(
      '1'
    );
    const nextButton = screen.getByRole('button', {
      name: '>',
    }) as HTMLButtonElement;

    expect(nextButton).toBeInTheDocument();
    expect(nextButton.disabled).toBeTruthy();

    await userEvent.click(nextButton);
    await expect(
      new URLSearchParams(router.state.location.search).get('page')
    ).toBe('2');
  });

  it('click on card', async () => {
    render(<RouterProvider router={router} />);

    const cards = await screen.findAllByRole('link');
    expect(cards.length).toBe(10);

    //open details
    await userEvent.click(cards[0]);

    await expect(router.state.location.pathname).toBe('/gallery/1');
    expect(screen.getByTestId('aside-widget')).toBeInTheDocument();
  });

  it('Check localStorag retrieves/save search text', async () => {
    render(<RouterProvider router={router} />);

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

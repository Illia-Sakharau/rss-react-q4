import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Gallery from '@/pages/gallery';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from '@/test/createMockRouter';
import { preparedArtworksInfo } from '@/test/testData';

const mockPush = vi.fn();
const renderWithContext = () =>
  render(
    <RouterContext.Provider value={createMockRouter({ push: mockPush })}>
      <Gallery
        totalPages={10}
        artworks={preparedArtworksInfo}
        currentPage={1}
        artPerPage={preparedArtworksInfo.length}
        searchText={''}
      />
    </RouterContext.Provider>
  );

describe('Gallery page', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('pagination update URL query', async () => {
    renderWithContext();

    const nextButton = screen.getByRole('button', {
      name: '>',
    }) as HTMLButtonElement;

    expect(nextButton).toBeInTheDocument();

    await userEvent.click(nextButton);
    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/',
      query: { page: '2' },
    });
  });

  it('click on card', async () => {
    renderWithContext();

    const cards = await screen.findAllByRole('link');
    expect(cards.length).toBe(11);

    await userEvent.click(cards[0]);
    expect(mockPush).toHaveBeenCalledWith('/gallery/1', '/gallery/1', {
      locale: undefined,
      scroll: true,
      shallow: undefined,
    });
  });
});

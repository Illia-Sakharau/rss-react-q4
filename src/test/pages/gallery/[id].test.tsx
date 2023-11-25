import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { preparedArtworksInfo } from '../../testData';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from '../../createMockRouter';
import ArtworksDetails from '@/pages/gallery/[id]';

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as object;

  return {
    ...actual,
    useParams: vi.fn().mockReturnValue({ artID: '1' }),
  };
});

describe('Artwork detailes aside widget', () => {
  it('', async () => {
    const artworksInfo = preparedArtworksInfo[0];
    const { imgAlt, title, artist, date, category, provenance } = artworksInfo;
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <ArtworksDetails
          totalPages={10}
          artworks={preparedArtworksInfo}
          currentPage={1}
          artPerPage={preparedArtworksInfo.length}
          searchText={''}
          openedArt={artworksInfo}
        />
      </RouterContext.Provider>
    );

    expect(screen.getByText('Close')).toBeInTheDocument();

    const imgEl = await screen.findAllByAltText(imgAlt);
    expect(imgEl.length).toBe(2);
    expect(screen.getAllByText(title).length).toBe(2);
    expect(screen.getAllByText(artist).length).toBe(2);
    expect(screen.getAllByText(date).length).toBe(2);
    expect(screen.getAllByText(category).length).toBe(1);
    expect(screen.getAllByText(provenance).length).toBe(1);
  });
});

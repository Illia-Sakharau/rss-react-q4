import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import ArtAsideWidget from './ArtAsideWidget';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from '../../../test/createMockRouter';

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as object;

  return {
    ...actual,
    useParams: vi.fn().mockReturnValue({ artID: '1' }),
  };
});

describe('Artwork detailes aside widget', () => {
  it('', async () => {
    const artworksInfo = TEST_DATA.preparedArtworksInfo[0];
    const { imgAlt, title, artist, date, category, provenance } = artworksInfo;
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <ArtAsideWidget artInfo={artworksInfo} />
      </RouterContext.Provider>
    );

    expect(screen.getByText('Close')).toBeInTheDocument();

    const imgEl = await screen.findByAltText(imgAlt);
    expect(imgEl).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(artist)).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByText(provenance)).toBeInTheDocument();
  });
});

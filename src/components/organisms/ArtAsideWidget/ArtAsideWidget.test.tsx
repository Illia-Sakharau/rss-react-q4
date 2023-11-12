import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import ArtAsideWidget from './ArtAsideWidget';
import { MemoryRouter } from 'react-router-dom';

const triger = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as object;

  return {
    ...actual,
    useParams: vi.fn().mockReturnValue({ artID: '1' }),
  };
});

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
    },
  };
});

describe('Artwork detailes aside widget', () => {
  it('', async () => {
    const { imgAlt, title, artist, date, category, provenance } =
      TEST_DATA.preparedArtworksInfo[0];
    render(
      <MemoryRouter>
        <ArtAsideWidget />
      </MemoryRouter>
    );

    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => expect(triger).toHaveBeenCalledOnce);

    expect(screen.getByAltText(imgAlt)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(artist)).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByText(provenance)).toBeInTheDocument();
  });
});

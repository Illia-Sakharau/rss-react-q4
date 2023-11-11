import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import ArtDetails from './ArtDetails';

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
    },
  };
});

describe('Artwork details info', () => {
  it('Check loader and data', async () => {
    const { id, imgAlt, title, artist, date, category, provenance } =
      TEST_DATA.preparedArtworksInfo[0];
    render(<ArtDetails artID={`${id}`} />);

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

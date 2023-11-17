import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import ArtAsideWidget from './ArtAsideWidget';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/store';

const store = setupStore();

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as object;

  return {
    ...actual,
    useParams: vi.fn().mockReturnValue({ artID: '1' }),
  };
});

describe('Artwork detailes aside widget', () => {
  it('', async () => {
    const { imgAlt, title, artist, date, category, provenance } =
      TEST_DATA.preparedArtworksInfo[0];
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ArtAsideWidget />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    const imgEl = await screen.findByAltText(imgAlt);
    expect(imgEl).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(artist)).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByText(provenance)).toBeInTheDocument();
  });
});

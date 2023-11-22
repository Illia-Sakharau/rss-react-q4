import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import ArtDetails from './ArtDetails';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/store';

const store = setupStore();

describe('Artwork details info', () => {
  it('Check loader and data', async () => {
    const { id, imgAlt, title, artist, date, category, provenance } =
      TEST_DATA.preparedArtworksInfo[3];
    render(
      <Provider store={store}>
        <ArtDetails artID={`${id}`} />
      </Provider>
    );

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

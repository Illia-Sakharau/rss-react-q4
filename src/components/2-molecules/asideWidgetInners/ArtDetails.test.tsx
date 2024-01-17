import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import ArtDetails from './ArtDetails';

describe('Artwork details info', () => {
  it('Check loader', async () => {
    const artworksInfo = undefined;
    render(<ArtDetails artInfo={artworksInfo} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('Check data', async () => {
    const artworksInfo = TEST_DATA.preparedArtworksInfo[3];
    const { imgAlt, title, artist, date, category, provenance } = artworksInfo;
    render(<ArtDetails artInfo={artworksInfo} />);

    const imgEl = await screen.findByAltText(imgAlt);
    expect(imgEl).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(artist)).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByText(provenance)).toBeInTheDocument();
  });
});

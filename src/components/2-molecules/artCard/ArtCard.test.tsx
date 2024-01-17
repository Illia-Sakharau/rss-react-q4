import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import ArtCard from './ArtCard';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from '../../../test/createMockRouter';

describe('Artwork card', () => {
  const arts = TEST_DATA.preparedArtworksInfo;

  it('Check information on card with full data', async () => {
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <ArtCard art={arts[0]} />
      </RouterContext.Provider>
    );

    const card = screen.getByRole('link');

    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('href', '/gallery/1');
    expect(screen.getByAltText(arts[0].imgAlt)).toBeInTheDocument();
    expect(screen.getByText(arts[0].title)).toBeInTheDocument();
    expect(screen.getByText(arts[0].artist)).toBeInTheDocument();
    expect(screen.getByText(arts[0].date)).toBeInTheDocument();
  });

  it('Check information on card with gaps in data', async () => {
    render(
      <RouterContext.Provider
        value={createMockRouter({ asPath: '/gallery?page=1' })}
      >
        <ArtCard art={arts[1]} />
      </RouterContext.Provider>
    );

    const card = screen.getByRole('link');

    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('href', '/gallery/2?page=1');
    expect(screen.getByAltText(arts[1].imgAlt)).toBeInTheDocument();
    expect(screen.getByText(arts[1].title)).toBeInTheDocument();
    expect(screen.getByText(arts[1].artist)).toBeInTheDocument();
    expect(screen.getByText(arts[1].date)).toBeInTheDocument();
  });
});

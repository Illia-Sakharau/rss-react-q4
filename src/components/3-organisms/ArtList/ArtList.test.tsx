import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import ArtList from './ArtList';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from '../../../test/createMockRouter';
import userEvent from '@testing-library/user-event';

describe('Check loading state', () => {
  it('Check loader state', async () => {
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <ArtList artworks={undefined} artPerPage={0} />
      </RouterContext.Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('Check empty state', async () => {
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <ArtList artworks={[]} artPerPage={0} />
      </RouterContext.Provider>
    );

    expect(screen.getByText('No matches found')).toBeInTheDocument();
  });

  it('Check filled state', async () => {
    const artworks = TEST_DATA.preparedArtworksInfo;
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <ArtList artworks={artworks} artPerPage={artworks.length} />
      </RouterContext.Provider>
    );

    const cardEls = await screen.findAllByRole('link');

    expect(cardEls.length).toBe(11);
    TEST_DATA.preparedArtworksInfo.forEach((art) => {
      expect(screen.getByText(art.title)).toBeInTheDocument();
    });
  });

  it('Check item per page select', async () => {
    const mocckedPush = vi.fn();
    const artworks = TEST_DATA.preparedArtworksInfo;
    render(
      <RouterContext.Provider value={createMockRouter({ push: mocckedPush })}>
        <ArtList artworks={artworks} artPerPage={artworks.length} />
      </RouterContext.Provider>
    );

    const selectEl = screen.getByRole('combobox');
    const options = screen.getAllByRole('option') as HTMLOptionElement[];

    expect(selectEl).toBeInTheDocument();
    expect(options.length).toBe(4);
    expect(options[1].selected).toBeTruthy();

    await userEvent.selectOptions(selectEl, options[2].value);
    expect(mocckedPush).toHaveBeenCalled();
  });
});

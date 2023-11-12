import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import { Art } from '../../../types';
import ArtList from './ArtList';
import { GalleyContext } from '../../../pages/gallery/context';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const selectedArtNumber = '10';
const setSelectedArtNumber = vi.fn() as React.Dispatch<
  React.SetStateAction<string>
>;
const setCurrentPage = vi.fn() as React.Dispatch<React.SetStateAction<string>>;

const searchText = '';
const setSearchText = vi.fn() as React.Dispatch<React.SetStateAction<string>>;

const customRender = (arts: Art[] | undefined) => {
  render(
    <MemoryRouter>
      <GalleyContext.Provider
        value={{
          selectedArtNumber,
          setSelectedArtNumber,
          setCurrentPage,
          searchText,
          setSearchText,
          arts,
        }}
      >
        <ArtList />
      </GalleyContext.Provider>
    </MemoryRouter>
  );
};

describe('Art list', () => {
  it('Check loader state', async () => {
    const arts: Art[] | undefined = undefined;
    customRender(arts);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('Check empty state', async () => {
    const arts: Art[] | undefined = [];
    customRender(arts);

    expect(screen.getByText('No matches found')).toBeInTheDocument();
  });

  it('Check filled state', async () => {
    const arts: Art[] | undefined = TEST_DATA.preparedArtworksInfo;
    customRender(arts);

    expect(screen.getAllByRole('link').length).toBe(
      TEST_DATA.preparedArtworksInfo.length
    );
    TEST_DATA.preparedArtworksInfo.forEach((art) => {
      expect(screen.getByText(art.title)).toBeInTheDocument();
    });
  });

  it('Check item per page select', async () => {
    const arts: Art[] | undefined = TEST_DATA.preparedArtworksInfo;
    customRender(arts);

    const selectEl = screen.getByRole('combobox');
    const options = screen.getAllByRole('option') as HTMLOptionElement[];

    expect(selectEl).toBeInTheDocument();
    expect(options.length).toBe(4);
    expect(options[1].selected).toBeTruthy();

    await userEvent.selectOptions(selectEl, options[2].value);
    expect(setSelectedArtNumber).toHaveBeenCalledOnce;
    expect(setCurrentPage).toHaveBeenCalledOnce;
  });
});

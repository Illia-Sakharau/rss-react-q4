import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import { Art } from '../../../types';
import ArtList from './ArtList';
import { GalleyContext } from '../../../pages/gallery/context';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/store';
import { gallerySlice } from '../../../store/reducers/GallarySlice';

const selectedArtNumber = '10';
const setSelectedArtNumber = vi.fn() as React.Dispatch<
  React.SetStateAction<string>
>;

const store = setupStore();
const customRender = (arts: Art[] | undefined) => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <GalleyContext.Provider
          value={{
            selectedArtNumber,
            setSelectedArtNumber,
            arts,
          }}
        >
          <ArtList />
        </GalleyContext.Provider>
      </MemoryRouter>
    </Provider>
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
    const { setCurrentPage } = gallerySlice.actions;

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

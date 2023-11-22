import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import ArtList from './ArtList';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/store';
import { gallerySlice } from '../../../store/reducers/GallarySlice';

const setSelectedArtNumber = vi.fn() as React.Dispatch<
  React.SetStateAction<string>
>;

const store = setupStore();
const customRender = () =>
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ArtList />
      </MemoryRouter>
    </Provider>
  );
describe('Art list 1', () => {
  it('Check loader state', async () => {
    customRender();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('Check filled state', async () => {
    customRender();

    const cardEls = await screen.findAllByRole('link');

    expect(cardEls.length).toBe(10);
    TEST_DATA.preparedArtworksInfo.toSpliced(9, 1).forEach((art) => {
      expect(screen.getByText(art.title)).toBeInTheDocument();
    });
  });

  it('Check item per page select', async () => {
    customRender();
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

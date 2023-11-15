import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Art } from '../../types';

interface IGalleryState {
  artworks: Art[];
  isLoading: boolean;
  error: string;
  searchText: string;
  currentPage: string;
}

const initialState: IGalleryState = {
  artworks: [],
  isLoading: false,
  error: '',
  searchText: localStorage.getItem('searchText') || '',
  currentPage: '1',
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
  },
});

export default gallerySlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Art } from '../../types';

interface IGalleryState {
  artworks: Art[];
  isLoading: boolean;
  error: string;
  searchText: string;
}

const initialState: IGalleryState = {
  artworks: [],
  isLoading: false,
  error: '',
  searchText: localStorage.getItem('searchText') || '',
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      localStorage.setItem('searchText', action.payload);
      state.searchText = action.payload;
    },
  },
});

export default gallerySlice.reducer;

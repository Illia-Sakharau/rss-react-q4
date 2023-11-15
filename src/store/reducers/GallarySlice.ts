import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGalleryState {
  isLoading: boolean;
  searchText: string;
  currentPage: number;
  artPerPage: number;
  totalPages: number;
}

const initialState: IGalleryState = {
  isLoading: false,
  searchText: localStorage.getItem('searchText') || '',
  currentPage: 1,
  artPerPage: 10,
  totalPages: 1,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setArtPerPage(state, action: PayloadAction<number>) {
      state.artPerPage = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export default gallerySlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Art } from '../../types';
import { artworksAPI } from '../../API/aicAPI';

interface IGalleryState {
  artworks: Art[];
  isLoading: boolean;
  searchText: string;
  currentPage: number;
  artPerPage: number;
  totalPages: number;
}

const initialState: IGalleryState = {
  artworks: [],
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
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      artworksAPI.endpoints.fetchArtworksBySearch.matchPending,
      (state) => {
        state.isLoading = true;
        state.artworks = [];
      }
    ),
      builder.addMatcher(
        artworksAPI.endpoints.fetchArtworksBySearch.matchFulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.artworks = payload;
        }
      ),
      builder.addMatcher(
        artworksAPI.endpoints.fetchArtworksBySearch.matchRejected,
        (state) => {
          state.isLoading = false;
          state.artworks = [];
        }
      );
  },
});

export default gallerySlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { artworksAPI } from '../../API/aicAPI';

interface IGalleryState {
  isLoading: boolean;
}

const initialState: IGalleryState = {
  isLoading: false,
};

export const artDetailsSlice = createSlice({
  name: 'artDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(artworksAPI.endpoints.fetchArtwork.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        artworksAPI.endpoints.fetchArtwork.matchFulfilled,
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(artworksAPI.endpoints.fetchArtwork.matchRejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default artDetailsSlice.reducer;

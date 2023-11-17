import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGalleryState {
  isLoading: boolean;
}

const initialState: IGalleryState = {
  isLoading: false,
};

export const artDetailsSlice = createSlice({
  name: 'artDetails',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export default artDetailsSlice.reducer;

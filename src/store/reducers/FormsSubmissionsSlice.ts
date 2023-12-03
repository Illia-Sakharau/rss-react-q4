import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISubmitInfo } from '../../types';

const initialState: { submitions: ISubmitInfo[]; submitRedirect: boolean } = {
  submitions: [],
  submitRedirect: false,
};

export const formsSubmissionsSlice = createSlice({
  name: 'manuallyFormData',
  initialState,
  reducers: {
    setSubmitInfo(state, action: PayloadAction<ISubmitInfo>) {
      state.submitions.unshift(action.payload);
      state.submitRedirect = true;
    },
    setSubmitRedirect(state, action: PayloadAction<boolean>) {
      state.submitRedirect = action.payload;
    },
  },
});

export default formsSubmissionsSlice.reducer;

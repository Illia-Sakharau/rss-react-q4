import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISubmitInfo } from '../../types';

const initialState: { submitions: ISubmitInfo[] } = {
  submitions: [],
};

export const FormsSubmissionsSlice = createSlice({
  name: 'manuallyFormData',
  initialState,
  reducers: {
    setSubmitInfo(state, action: PayloadAction<ISubmitInfo>) {
      state.submitions.unshift(action.payload);
    },
  },
});

export default FormsSubmissionsSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Gender } from '../../types';
import { initialState } from './initialStateForForms';

export const ManuallyFormSlice = createSlice({
  name: 'manuallyFormData',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload !== '' ? action.payload : null;
    },
    setAge(state, action: PayloadAction<number>) {
      state.age = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload !== '' ? action.payload : null;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload !== '' ? action.payload : null;
    },
    setGender(state, action: PayloadAction<Gender>) {
      state.gender = action.payload;
    },
    setTermsAndConditions(state, action: PayloadAction<boolean>) {
      state.termsAndConditions = action.payload;
    },
    setPicture(state, action: PayloadAction<string>) {
      state.picture = action.payload !== '' ? action.payload : null;
    },
    setCountry(state, action: PayloadAction<string>) {
      state.country = action.payload;
    },
  },
});

export default ManuallyFormSlice.reducer;

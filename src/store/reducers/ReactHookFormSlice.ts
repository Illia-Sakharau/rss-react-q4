import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialStateForForms';
import { Gender } from '../../types';

export const ReactHookFormSlice = createSlice({
  name: 'reactHookFormData',
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

export default ReactHookFormSlice.reducer;

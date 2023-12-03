import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { COUNTRIES_OPTIONS } from '../../constants';

const initialState: { countries: string[] } = {
  countries: COUNTRIES_OPTIONS,
};

export const countriesSlice = createSlice({
  name: 'manuallyFormData',
  initialState,
  reducers: {
    setCountries(state, action: PayloadAction<string[]>) {
      state.countries = action.payload;
    },
  },
});

export default countriesSlice.reducer;

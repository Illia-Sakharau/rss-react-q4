import { combineReducers, configureStore } from '@reduxjs/toolkit';
import FormsSubmissionsSlice from './reducers/FormsSubmissionsSlice';
import CountriesSlice from './reducers/CountriesSlice';

const rootReducer = combineReducers({
  FormsSubmissionsSlice,
  CountriesSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import FormsSubmissionsSlice from './reducers/FormsSubmissionsSlice';

const rootReducer = combineReducers({
  FormsSubmissionsSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import galleryReducer from './reducers/GallarySlice';

const rootReducer = combineReducers({
  galleryReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];

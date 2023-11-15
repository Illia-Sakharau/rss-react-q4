import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import galleryReducer from './reducers/GallarySlice';
import { artworksAPI } from '../API/aicAPI';

const rootReducer = combineReducers({
  galleryReducer,
  [artworksAPI.reducerPath]: artworksAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: () => getDefaultMiddleware().concat(artworksAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];

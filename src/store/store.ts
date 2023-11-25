import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { artworksAPI } from '../API/aicAPI';
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
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

export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });

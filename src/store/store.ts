import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ReactHookFormSlice from './reducers/ReactHookFormSlice';
import ManuallyFormSlice from './reducers/ManuallyFormSlice';

const rootReducer = combineReducers({
  ReactHookFormSlice,
  ManuallyFormSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];

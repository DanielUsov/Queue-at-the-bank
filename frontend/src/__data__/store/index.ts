import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

const rootReducer = combineReducers({});

const apiMiddleware: any[] = [];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
});

setupListeners(store.dispatch);

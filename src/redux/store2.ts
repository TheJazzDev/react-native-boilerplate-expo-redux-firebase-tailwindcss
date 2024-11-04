import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './features/account/user.slice';

const rootReducer = combineReducers({
  user: userReducer,
});

const preloadedState = {};

export const store = configureStore({
  preloadedState,
  reducer: rootReducer,
  // middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const dispatch = store.dispatch;

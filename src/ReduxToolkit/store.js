// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import registroSlice from './features/registroSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    registroSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(thunk),
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import registroSlice from './features/registroSlice';
import thunk from 'redux-thunk';
//configuramos el store
const store = configureStore({
  reducer: {
    //agregamos el reducer que hicimos en features
    registroSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(thunk),
});

//exportamos para ser int¿yectado en el provider
export default store;

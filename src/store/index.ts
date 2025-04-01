import { configureStore } from "@reduxjs/toolkit";

import { clientAuthApi } from "../services/clientAuthApi";

const store = configureStore({
  reducer: {
    [clientAuthApi.reducerPath]: clientAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clientAuthApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

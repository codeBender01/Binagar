import { configureStore } from "@reduxjs/toolkit";

import { clientAuthApi } from "../services/clientAuthApi";
import { categoriesClientApi } from "../services/categoriesClientApi";
import { brandsClientAPi } from "../services/brandsClientApi";
import { servicesApi } from "../services/servicesApi";

const store = configureStore({
  reducer: {
    [clientAuthApi.reducerPath]: clientAuthApi.reducer,
    [categoriesClientApi.reducerPath]: categoriesClientApi.reducer,
    [brandsClientAPi.reducerPath]: brandsClientAPi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      clientAuthApi.middleware,
      categoriesClientApi.middleware,
      brandsClientAPi.middleware,
      servicesApi.middleware
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { orderReducer } from '../features/order/orderSlice'
import { appReducer } from './appSlice'

export const store = configureStore({
  reducer: {
    order: orderReducer,
    app: appReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
})

export type AppRootStateType = ReturnType<typeof store.getState>

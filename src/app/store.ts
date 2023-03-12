import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { crewsReducer } from '../features/crews/crewsSlice'
import { orderReducer } from '../features/order/orderSlice'

export const store = configureStore({
  reducer: {
    crews: crewsReducer,
    order: orderReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
})

export type AppRootStateType = ReturnType<typeof store.getState>

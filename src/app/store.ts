import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { appReducer } from './appSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
})

export type AppRootStateType = ReturnType<typeof store.getState>

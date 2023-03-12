import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { crewsReducer } from '../features/crews/crewsSlice'

export const store = configureStore({
  reducer: {
    crews: crewsReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
})

export type AppRootStateType = ReturnType<typeof store.getState>

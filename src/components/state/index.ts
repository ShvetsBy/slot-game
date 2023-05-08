import { configureStore } from '@reduxjs/toolkit'
import bettingReducer from './bettingSlice'

const store = configureStore({
  reducer: {
    betting: bettingReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

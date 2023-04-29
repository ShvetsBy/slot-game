import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type BettingState = {
  totalCoins: number
  isSpinning: boolean
}

const initialState: BettingState = {
  totalCoins: 9999,
  isSpinning: false,
}

const bettingSlice = createSlice({
  name: 'betting',
  initialState,
  reducers: {
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.totalCoins -= action.payload
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.totalCoins += action.payload
    },
    setIsSpinning: (state) => {
      state.isSpinning = !state.isSpinning
    },
  },
})

export const { incrementByAmount, decrementByAmount, setIsSpinning } = bettingSlice.actions

export default bettingSlice.reducer

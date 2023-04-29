import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { constants } from '../../content/constants'

type BettingState = {
  totalCoins: number
  bet: number
  isSpinning: boolean
}

const initialState: BettingState = {
  totalCoins: constants.BASIC_COINS_AMOUNT,
  bet: constants.BASIC_BET,
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
      console.log(action.payload)
      state.totalCoins += action.payload
    },
    setIsSpinning: (state) => {
      state.isSpinning = !state.isSpinning
    },
    decrementBet: (state, action: PayloadAction<number>) => {
      state.bet -= action.payload
    },
    incrementBet: (state, action: PayloadAction<number>) => {
      state.bet -= action.payload
    },
  },
})

export const { incrementByAmount, decrementByAmount, setIsSpinning, decrementBet, incrementBet } =
  bettingSlice.actions

export default bettingSlice.reducer

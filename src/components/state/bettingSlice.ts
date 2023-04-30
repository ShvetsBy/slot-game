import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { constants } from '../../content/constants'

type BettingState = {
  totalCoins: number
  bet: number
  level: number
  coinValue: number
  isSpinning: boolean
}

const initialState: BettingState = {
  totalCoins: constants.BASIC_COINS_AMOUNT,
  bet: constants.BASIC_BET,
  coinValue: constants.START_COIN_VALUE,
  isSpinning: false,
  level: constants.START_LEVEL,
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
    decrementBet: (state, action: PayloadAction<number>) => {
      state.bet -= action.payload
    },
    incrementBet: (state, action: PayloadAction<number>) => {
      state.bet += action.payload
    },
    decrementLevel: (state) => {
      state.level -= 1
    },
    incrementLevel: (state) => {
      state.level += 1
    },
    decrementCoinValue: (state) => {
      state.coinValue /= 2
    },
    incrementCoinValue: (state) => {
      state.coinValue *= 2
    },
  },
})

export const {
  incrementByAmount,
  decrementByAmount,
  setIsSpinning,
  decrementBet,
  incrementBet,
  decrementLevel,
  incrementLevel,
  decrementCoinValue,
  incrementCoinValue,
} = bettingSlice.actions

export default bettingSlice.reducer

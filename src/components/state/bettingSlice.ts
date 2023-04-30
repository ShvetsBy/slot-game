import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { constants } from '../../content/constants'

type BettingState = {
  totalCoins: number
  displayCoins: number
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
  displayCoins: constants.BASIC_COINS_AMOUNT,
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
    decrementLevel: (state) => {
      state.level -= 1
      state.bet = constants.BASIC_BET * state.level
    },
    incrementLevel: (state) => {
      state.level += 1
      state.bet = constants.BASIC_BET * state.level
    },
    decrementCoinValue: (state) => {
      state.coinValue /= 2

      // state.displayCoins = state.totalCoins / state.coinValue
    },
    incrementCoinValue: (state) => {
      state.coinValue *= 2

      // state.displayCoins = state.totalCoins / state.coinValue
    },
  },
})

export const {
  incrementByAmount,
  decrementByAmount,
  setIsSpinning,
  decrementLevel,
  incrementLevel,
  decrementCoinValue,
  incrementCoinValue,
} = bettingSlice.actions

export default bettingSlice.reducer

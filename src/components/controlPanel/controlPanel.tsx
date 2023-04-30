import React, { useState, useEffect } from 'react'
import { ControlsWrapper } from './controlWrapper'
import { DataDisplay } from './dataDisplay'
import { AdjustButtons } from './adjustButtons'
import { Spin } from './spin'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import {
  decrementCoinValue,
  decrementLevel,
  incrementCoinValue,
  incrementLevel,
} from '../state/bettingSlice'

export function ControlPanel() {
  const betValue = useAppSelector((state) => state.betting.bet)
  const currentLevel = useAppSelector((state) => state.betting.level)
  const currentCoinValue = useAppSelector((state) => state.betting.coinValue)
  const coinsAmount = useAppSelector((state) => state.betting.totalCoins)
  const [isLevelButtonDecreaseDisabled, setIsLevelButtonDereaseDisabled] = useState(false)
  const [isLevelButtonIncreaseDisabled, setIsLevelButtonInreaseDisabled] = useState(false)
  const [isLevelCoinDecreaseDisabled, setIsCoinButtonDereaseDisabled] = useState(false)
  const [isLevelCoinIncreaseDisabled, setIsCoinButtonInreaseDisabled] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (currentLevel <= 1) {
      setIsLevelButtonDereaseDisabled(true)
    } else setIsLevelButtonDereaseDisabled(false)

    if (currentLevel >= 10) {
      setIsLevelButtonInreaseDisabled(true)
    } else setIsLevelButtonInreaseDisabled(false)
  }, [currentLevel])

  useEffect(() => {
    if (currentCoinValue <= 0.25) {
      setIsCoinButtonDereaseDisabled(true)
    } else setIsCoinButtonDereaseDisabled(false)

    if (currentCoinValue >= 2) {
      setIsCoinButtonInreaseDisabled(true)
    } else setIsCoinButtonInreaseDisabled(false)
  }, [currentCoinValue])

  const handleLevelIncrement = () => {
    console.log('fuck')
    dispatch(incrementLevel())
  }

  const handleLevelDecrement = () => {
    console.log('fuck 1')
    dispatch(decrementLevel())
  }

  return (
    <ControlsWrapper>
      <div className="single-control">
        <DataDisplay title="Bet" data={betValue} />
        <AdjustButtons
          title="Level"
          value={currentLevel}
          decrease={handleLevelDecrement}
          increase={handleLevelIncrement}
          disabledDecrease={isLevelButtonDecreaseDisabled}
          disabledIncrease={isLevelButtonIncreaseDisabled}
        />
      </div>

      <Spin />
      <div className="single-control">
        <AdjustButtons
          title="Coin Value"
          increase={() => dispatch(incrementCoinValue())}
          decrease={() => dispatch(decrementCoinValue())}
          value={currentCoinValue}
          disabledDecrease={isLevelCoinDecreaseDisabled}
          disabledIncrease={isLevelCoinIncreaseDisabled}
        />
        <DataDisplay title="Coins" data={coinsAmount} />
      </div>
    </ControlsWrapper>
  )
}

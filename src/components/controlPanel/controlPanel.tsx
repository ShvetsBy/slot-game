import React, { useState, useEffect } from 'react'
import { ControlsWrapper } from './controlWrapper'
import { DataDisplay } from './dataDisplay'
import { AdjustButtons } from './adjustButtons'
import { Spin } from './spin'
import { useAppSelector } from '../state/hooks'

export function ControlPanel() {
  // const BASIC_BET = 10
  const betValue = useAppSelector((state) => state.betting.bet)
  const coinsAmount = useAppSelector((state) => state.betting.totalCoins)
  const [bet, setBet] = useState(betValue)
  const [level, setLevel] = useState(1)
  const [coinValue, setCoinValue] = useState(1)
  const [coins, setCoins] = useState(coinsAmount)

  useEffect(() => {
    setBet(betValue * level)
  }, [level])

  useEffect(() => {
    setCoins(coinsAmount / coinValue)
  }, [coinValue])

  return (
    <ControlsWrapper>
      <div className="single-control">
        <DataDisplay title="Bet" data={bet} />
        <AdjustButtons
          title="Level"
          value={level}
          decrease={() => setLevel(level - 1)}
          increase={() => setLevel(level + 1)}
        />
      </div>

      <Spin />
      <div className="single-control">
        <AdjustButtons
          title="Coin Value"
          increase={() => setCoinValue(coinValue * 2)}
          decrease={() => setCoinValue(coinValue / 2)}
          value={coinValue}
        />
        <DataDisplay title="Coins" data={coinsAmount} />
      </div>
    </ControlsWrapper>
  )
}

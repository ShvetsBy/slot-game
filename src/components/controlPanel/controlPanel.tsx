import React, { useState, useEffect } from 'react'
import { ControlsWrapper } from './controlWrapper'
import { DataDisplay } from './dataDisplay'
import { AdjustButtons } from './adjustButtons'
import { Spin } from './spin'

export function ControlPanel() {
  const BASIC_BET = 10
  const BASIC_COINS_AMOUNT = 5000
  const [bet, setBet] = useState(BASIC_BET)
  const [level, setLevel] = useState(1)
  const [coinValue, setCoinValue] = useState(1)
  const [coins, setCoins] = useState(BASIC_COINS_AMOUNT)

  useEffect(() => {
    setBet(BASIC_BET * level)
  }, [level])

  useEffect(() => {
    setCoins(BASIC_COINS_AMOUNT / coinValue)
  }, [coinValue])

  return (
    <ControlsWrapper>
      <DataDisplay title="Bet" data={bet} />
      <AdjustButtons
        title="Level"
        value={level}
        decrease={() => setLevel(level - 1)}
        increase={() => setLevel(level + 1)}
      />
      <Spin />
      <AdjustButtons
        title="Coin Value"
        increase={() => setCoinValue(coinValue * 2)}
        decrease={() => setCoinValue(coinValue / 2)}
        value={coinValue}
      />
      <DataDisplay title="Coins" data={coins} />
    </ControlsWrapper>
  )
}

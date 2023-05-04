import React from 'react'
import './infoBar.css'
import { useAppSelector } from '../state/hooks'

export function InfoBar() {
  const cash = useAppSelector((state) => state.betting.totalCoins)
  const bet = useAppSelector((state) => state.betting.bet)

  return (
    <div className="infobar-wrapper">
      <p> Cash: ${cash}</p>
      <p> Win: 10</p>
      <p> Bet: ${bet}</p>
    </div>
  )
}

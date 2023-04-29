/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './reels.css'
import { Stage, Container } from '@pixi/react'
import { cardsData } from '../../content/cards'
import ACard from '../../assets/cards/a-card.png'
import JCard from '../../assets/cards/j-card.png'
import KCard from '../../assets/cards/k-card.png'
import QCard from '../../assets/cards/q-card.png'
import Flamingo from '../../assets/cards/flamingo-card.png'
import Plane from '../../assets/cards/plane-card.png'
import FreeSpins from '../../assets/cards/free-spins.png'
import CatchMe from '../../assets/cards/catch-card.png'
import Gun from '../../assets/cards/gun-card.png'
import WalkieTalkie from '../../assets/cards/walkie-talkie.png'
import Jerk from '../../assets/cards/jerk-card.png'
import Girl from '../../assets/cards/girl-card.png'
import WildCard from '../../assets/cards/wild-card.png'
import WildFire from '../../assets/cards/wild-fire.png'
import { ReelsContainer } from './reels'
import { ReelSymbolType, CardsImgRecordType } from '../types/reelSymbol'
import { getShuffled } from '../../utils/getShuffled'
import { generatePosition } from '../../utils/generatePosition'
import { getRandom } from '../../utils/getRandom'
import { checkWin } from '../../utils/checkWin'
import { useAppSelector, useAppDispatch } from '../state/hooks'
import { setIsSpinning } from '../state/bettingSlice'

const cardsImg: CardsImgRecordType = {
  ACard,
  JCard,
  KCard,
  QCard,
  Flamingo,
  Plane,
  FreeSpins,
  CatchMe,
  Gun,
  WalkieTalkie,
  WildCard,
  WildFire,
  Jerk,
  Girl,
}

export function GameField() {
  const SYMBOL_WIDTH = 144
  const SYMBOL_HEIGHT = 196
  const REELS_QUANTITY = 5
  const SYMBOLS_QUANTITY = 3
  //   const SPIN_TIME = 100;

  //   const [isRunning, setIsRunning] = useState(false);
  const [reelData, setReelData] = useState<any[]>(cardsData)
  const [allReelData, setAllReelData] = useState<any[]>([])
  const [hasWinner, setHasWinner] = useState(false)
  const [winMsg] = useState<string>('You win!!!')
  const isSpinning = useAppSelector((state) => state.betting.isSpinning)
  const dispatch = useAppDispatch()

  useEffect(() => {
    for (let i = 0; i < REELS_QUANTITY; i++) {
      const reelDataWithY = reelData.map((el) => ({ ...el }))
      const yPositions: Array<number> = getShuffled(generatePosition(reelData.length))
      reelDataWithY.forEach((item: ReelSymbolType, idx) => {
        // eslint-disable-next-line no-param-reassign
        item.y = yPositions[idx]
      })
      setAllReelData((prev) => [...prev, reelDataWithY])
    }
  }, [])

  const reelRotation = (reelIndex: number) => {
    const reel = [...allReelData[reelIndex]]
    reel.forEach((e) => {
      if (e.y < 13) {
        e.y += 1
      } else {
        e.y = 0
      }
    })
    setReelData(reel)
  }

  const spin = (position: number, times: number) => {
    for (let i = 0; i < times; i++) {
      reelRotation(position)
    }
  }

  if (isSpinning) {
    for (let i = 0; i < REELS_QUANTITY; i++) {
      spin(i, 100 + getRandom(1, 50))
    }

    checkWin(allReelData, setHasWinner)
    dispatch(setIsSpinning())
  }

  return (
    <Stage width={1024} height={638} options={{ backgroundAlpha: 0.6 }}>
      <Container
        width={SYMBOL_WIDTH * REELS_QUANTITY}
        height={SYMBOL_HEIGHT * SYMBOLS_QUANTITY}
        x={152}
        y={30}
      >
        <ReelsContainer
          reelsNumber={REELS_QUANTITY}
          hasWinner={hasWinner}
          winMsg={winMsg}
          data={allReelData}
          width={SYMBOL_WIDTH}
          height={SYMBOL_HEIGHT}
          images={cardsImg}
        />
      </Container>
    </Stage>
  )
}

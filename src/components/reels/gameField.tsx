/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import './reels.css'
import { gsap, Power1 } from 'gsap'
import { Stage, Container } from '@pixi/react'
import { Provider } from 'react-redux'
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
import { ReelSymbolType } from '../types/types'
import { checkWin } from '../../utils/checkWin'
import { useAppSelector, useAppDispatch } from '../state/hooks'
import { incrementByAmount, decrementByAmount, setIsSpinning } from '../state/bettingSlice'
import { generatePosition } from '../../utils/generatePosition'
import store from '../state'

import { constants } from '../../content/constants'

export type CardImg =
  | 'ACard'
  | 'JCard'
  | 'KCard'
  | 'QCard'
  | 'Flamingo'
  | 'Plane'
  | 'FreeSpins'
  | 'CatchMe'
  | 'Gun'
  | 'WalkieTalkie'
  | 'WildCard'
  | 'WildFire'
  | 'Jerk'
  | 'Girl'

const cardsImg: Record<CardImg, string> = {
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
  const [allReelData, setAllReelData] = useState<ReelSymbolType[][]>([])
  const [hasWinner, setHasWinner] = useState(false)
  const [winMsg, setWinMsg] = useState<string>('')
  const [tint, setTint] = useState<string>('white')

  const isSpinning = useAppSelector((state) => state.betting.isSpinning)
  const yPos = useAppSelector((state) => state.betting.drawResult)
  const dispatch = useAppDispatch()
  const betValue = useAppSelector((state) => state.betting.bet)
  const coinsAmount = useAppSelector((state) => state.betting.totalCoins)
  const [prevCoinsAmount, setPrevCoinsAmount] = useState<number>(coinsAmount)

  useEffect(() => {
    for (let i = 0; i < constants.REELS_QUANTITY; i++) {
      const yPositions: Array<number> = generatePosition(cardsData.length)
      const reelDataWithY = cardsData.map((el, idx) => ({ ...el, y: yPositions[idx] }))
      setAllReelData((prev) => [...prev, reelDataWithY])
    }
  }, [])

  useEffect(() => {
    if (isSpinning) {
      setHasWinner(false)
      setTint('white')
      const reelsToReset: ReelSymbolType[][] = []
      // console.log(reelsToReset)
      // allReelData.forEach((item) => {
      //   const temp = [...item]
      //   temp.forEach((el) => {
      //     if (el.win) {
      //       el.win = false
      //       console.log(el)
      //     }
      //   })
      //   console.log()
      //   reelsToReset.push(temp)
      // })
      // // console.log(reelsToReset)
      // setAllReelData(reelsToReset)

      dispatch(decrementByAmount(betValue))
      setTimeout(() => {
        dispatch(setIsSpinning())
      }, 3000)
    }
  }, [isSpinning])

  useEffect(() => {
    if (yPos.length === 5 && !isSpinning) {
      const roundResult = checkWin(allReelData, yPos)
      if (roundResult.hasWinner) {
        let gain = betValue * roundResult.multiplier!
        dispatch(incrementByAmount(gain))
        setWinMsg(`You win ${gain} coins`)
        setHasWinner(roundResult.hasWinner)
        roundResult.winline?.forEach((el, i) => {
          const winReelsData = [...allReelData]
          winReelsData[i].forEach((item: ReelSymbolType) => {
            if (item.y === el.y) {
              item.win = true
            }
          })
          setTint('#330000')
          setAllReelData(winReelsData)
        })

        gain = 0
      }
    }
  }, [yPos])

  useEffect(() => {
    const displays = document.querySelectorAll('.data-value')
    const coinDisplay = displays[displays.length - 1]
    gsap.from(coinDisplay, {
      textContent: prevCoinsAmount,
      duration: 0.5,
      ease: Power1.easeIn,
      snap: { textContent: 1 },
      stagger: 1,
    })
    setPrevCoinsAmount(coinsAmount)
  }, [coinsAmount])

  return (
    <Stage width={1024} height={524} options={{ backgroundAlpha: 0.6 }}>
      <Provider store={store}>
        <Container
          width={constants.SYMBOL_WIDTH * constants.REELS_QUANTITY}
          height={constants.SYMBOL_HEIGHT * constants.SYMBOLS_QUANTITY}
          x={196}
        >
          <ReelsContainer
            reelsNumber={constants.REELS_QUANTITY}
            hasWinner={hasWinner}
            winMsg={winMsg}
            symbolsData={allReelData}
            width={constants.SYMBOL_WIDTH}
            height={constants.SYMBOL_HEIGHT}
            images={cardsImg}
            tint={tint}
            isSpinning={isSpinning}
          />
        </Container>
      </Provider>
    </Stage>
  )
}

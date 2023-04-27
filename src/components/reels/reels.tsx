import React, { useEffect, useState } from 'react'
import './reels.css'
import { Stage, Container, Sprite } from '@pixi/react'
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
import { WinMsg } from './winMsg'

type CardsImgRecord = { [key: string]: string } // переписать как посоветовал Влад

const cardsImg: CardsImgRecord = {
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

export type ReelPosition = {
  x: number
}

export type ReelSymbol = {
  [x: string]: any // убрать колхоз
  id: string
  name: string
  value: string
  img: string
  y?: number
}

export function Reels() {
  const SYMBOL_WIDTH = 144
  const SYMBOL_HEIGHT = 196
  const REELS_QUANTITY = 5
  const SYMBOLS_QUANTITY = 3
  //   const SPIN_TIME = 100;

  //   const [isRunning, setIsRunning] = useState(false);
  const [reelData, setReelData] = useState<any[]>(cardsData)
  const [allReelData, setAllReelData] = useState<any[]>([])
  const [hasWinner, setHasWinner] = useState(false)
  const [winMsg, setWinMsg] = useState<string>('You win!!!')

  const getShuffled = (arr: number[]) => {
    const shuffledArr = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    return shuffledArr
  }

  const generateYPos = (number: number) => [...Array(number).keys()]

  useEffect(() => {
    for (let i = 0; i < REELS_QUANTITY; i++) {
      const reelDataWithY = reelData.map((el) => ({ ...el }))
      const yPositions: Array<number> = getShuffled(generateYPos(reelData.length))
      reelDataWithY.forEach((item: ReelSymbol, idx) => {
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

  const getRandom = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  const spin = (position: number, times: number) => {
    for (let i = 0; i < times; i++) {
      reelRotation(position)
    }
  }

  const click = () => {
    spin(0, 100 + getRandom(1, 50))
    spin(1, 200 + getRandom(1, 50))
    spin(2, 300 + getRandom(1, 50))
    spin(3, 400 + getRandom(1, 50))
    spin(4, 500 + getRandom(1, 50))

    const getResult = () => {
      const result: ReelSymbol[] = []
      for (let i = 0; i < allReelData.length; i++) {
        const temp = allReelData[i].filter((item: ReelSymbol) => item.y! <= 2)
        result.push(temp)
      }
      return result
    }

    type FindInArrayType = (
      array: Array<ReelSymbol>,
      item: ReelSymbol,
      index: number,
      result: ReelSymbol[]
    ) => void

    const findInArray: FindInArrayType = (array, item, index, result) => {
      let currentIndex: number = index
      const matchItem: ReelSymbol = array[currentIndex].find(
        (el: ReelSymbol) => el.name === item.name
      )
      if (matchItem) {
        result.push(matchItem)
        currentIndex += 1
        if (currentIndex <= result.length) {
          findInArray(array, item, currentIndex, result)
        }
      }
    }

    const checkWin = () => {
      const results: ReelSymbol[] = getResult()
      const winline: any[] = []
      const itemsToCheck = results.splice(0, 1).flat()
      itemsToCheck.forEach((el) => {
        const temp: any[] = []
        temp.push(el)
        findInArray(results, el, 0, temp)
        if (temp.length > 2) {
          winline.push(temp)
        }
      })
      if (winline.length) setHasWinner(true)
    }

    checkWin()
  }

  function ReelContainer(props: { x: number; data: ReelSymbol[] }) {
    const { x } = props
    const { data } = props
    return (
      <Container width={SYMBOL_WIDTH} x={x}>
        {data.map((el: ReelSymbol) => (
          <Sprite image={cardsImg[el.name]} y={SYMBOL_HEIGHT * el.y!} key={el.id} />
        ))}
      </Container>
    )
  }

  function ReelsContainer() {
    const row: Array<ReelPosition> = []
    for (let i = 0; i < REELS_QUANTITY; i++) {
      const reelPosition = i * SYMBOL_WIDTH
      const item: ReelPosition = {
        x: 0,
      }
      item.x = reelPosition
      row.push(item)
    }

    if (allReelData.length) {
      return (
        <>
          {row.map((el, i) => (
            <ReelContainer x={el.x} data={allReelData[i]} key={i} />
          ))}
          {hasWinner && <WinMsg text={winMsg} />}
        </>
      )
    }
    return null
  }

  return (
    <Stage width={1024} height={638} options={{ backgroundAlpha: 0.6 }} onClick={click}>
      <Container
        width={SYMBOL_WIDTH * REELS_QUANTITY}
        height={SYMBOL_HEIGHT * SYMBOLS_QUANTITY}
        x={152}
        y={30}
      >
        <ReelsContainer />
      </Container>
    </Stage>
  )
}

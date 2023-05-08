import { useEffect, useState } from 'react'
import { Container, Sprite, useTick } from '@pixi/react'
import { BlurFilter } from 'pixi.js'
import { flushSync } from 'react-dom'
import { ReelSymbolType, ReelContainerType } from '../types/types'
import { getShuffled } from '../../utils/getShuffled'
import { generatePosition } from '../../utils/generatePosition'
import { useAppDispatch } from '../state/hooks'
import { setDrawResult } from '../state/bettingSlice'

export function ReelContainer({
  x,
  width,
  height,
  symbolsData,
  images,
  tint,
  isSpinning,
}: ReelContainerType) {
  const blurFilter = new BlurFilter(0)
  const dispatch = useAppDispatch()
  const [yPositions, setYPositions] = useState<number[]>([])

  useEffect(() => {
    const temp: Array<number> = getShuffled(generatePosition(symbolsData.length))
    setYPositions(temp)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useTick(() => {
    if (isSpinning) {
      blurFilter.blurY = 6
      const temp: Array<number> = getShuffled(generatePosition(symbolsData.length))
      flushSync(() => {
        setYPositions(temp)
      })
    }
  })

  useEffect(() => {
    if (!isSpinning) {
      dispatch(setDrawResult(yPositions))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSpinning])

  return (
    <Container width={width} x={x}>
      {symbolsData.map((el: ReelSymbolType) => (
        <Sprite
          image={images[el.name]}
          y={height * yPositions[el.y] * 1.75}
          tint={el.win ? 'white' : tint}
          filters={[blurFilter]}
          key={el.id}
        />
      ))}
    </Container>
  )
}

import React, { useEffect, useState } from 'react'
import { Container, Sprite, useTick } from '@pixi/react'
import { BlurFilter } from 'pixi.js'
import { ReelSymbolType, ReelContainerType } from '../types/reelSymbol'
import { getShuffled } from '../../utils/getShuffled'
import { generatePosition } from '../../utils/generatePosition'
import { useAppSelector, useAppDispatch } from '../state/hooks'
import { setDrawResult } from '../state/bettingSlice'

export function ReelContainer({
  x,
  width,
  height,
  data,
  images,
  tint,
  isSpinning,
}: ReelContainerType) {
  const blurFilter = new BlurFilter(0)
  const dispatch = useAppDispatch()
  const [yPositions, setYPositions] = useState<number[]>([])

  useEffect(() => {
    const temp: Array<number> = getShuffled(generatePosition(data.length))
    setYPositions(temp)
  }, [])

  useTick(() => {
    if (isSpinning) {
      blurFilter.blurY = 6
      const temp: Array<number> = getShuffled(generatePosition(data.length))
      setYPositions(temp)
    }
  })
  dispatch(setDrawResult(yPositions))
  return (
    <Container width={width} x={x}>
      {data.map((el: ReelSymbolType) => (
        <Sprite
          image={images[el.name]}
          y={height * yPositions[el.y!]}
          tint={el.win ? 'white' : tint}
          filters={[blurFilter]}
          key={el.id}
        />
      ))}
    </Container>
  )
}

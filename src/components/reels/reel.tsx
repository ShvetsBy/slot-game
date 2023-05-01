import React, { useEffect, useState } from 'react'
import { Container, Sprite, useTick } from '@pixi/react'
import { BlurFilter } from 'pixi.js'
import { ReelSymbolType, ReelContainerType } from '../types/reelSymbol'
import { useAppSelector } from '../state/hooks'
import { getShuffled } from '../../utils/getShuffled'
import { generatePosition } from '../../utils/generatePosition'

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

  return (
    <Container width={width} x={x}>
      {data.map((el: ReelSymbolType, i) => (
        <Sprite
          image={images[el.name]}
          y={height * yPositions[i]}
          tint={el.win ? 'white' : tint}
          filters={[blurFilter]}
          key={el.id}
        />
      ))}
    </Container>
  )
}

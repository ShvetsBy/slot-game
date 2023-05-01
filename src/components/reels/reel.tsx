import React, { useState } from 'react'
import { Container, Sprite, useTick } from '@pixi/react'
import { BlurFilter } from 'pixi.js'
import { ReelSymbolType, ReelContainerType } from '../types/reelSymbol'
import { useAppSelector } from '../state/hooks'
import { getShuffled } from '../../utils/getShuffled'
import { generatePosition } from '../../utils/generatePosition'

export function ReelContainer({ x, width, height, data, images, tint }: ReelContainerType) {
  const blurFilter = new BlurFilter(1)
  blurFilter.blurY = 9
  const [posY, setPosY] = useState(0.1)

  const yPositions: Array<number> = getShuffled(generatePosition(data.length))
  console.log(yPositions)
  useTick((delta) => {
    setPosY(delta * 0.5)
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

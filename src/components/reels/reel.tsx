import React from 'react'
import { Container, Sprite } from '@pixi/react'
import { ReelSymbolType, ReelContainerType } from '../types/reelSymbol'

export function ReelContainer({ x, width, height, data, images }: ReelContainerType) {
  return (
    <Container width={width} x={x}>
      {data.map((el: ReelSymbolType) => (
        <Sprite image={images[el.name]} y={height * el.y!} key={el.id} />
      ))}
    </Container>
  )
}

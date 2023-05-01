import React, { useMemo } from 'react'
import { Container, Sprite, withFilters } from '@pixi/react'
import { BlurFilter } from 'pixi.js'
import { ReelSymbolType, ReelContainerType } from '../types/reelSymbol'

// const Filters = withFilters(Container, {
//   blur: BlurFilter,
// })

// console.log(Filters)

export function ReelContainer({ x, width, height, data, images, tint }: ReelContainerType) {
  const blurFilter = new BlurFilter(1)
  blurFilter.blurY = 9
  return (
    <Container width={width} x={x}>
      {data.map((el: ReelSymbolType) => (
        // <Filters key={el.id} blur={{ enabled: true }}>
        <Sprite
          image={images[el.name]}
          y={height * el.y!}
          tint={el.win ? 'white' : tint}
          filters={[blurFilter]}
          key={el.id}
        />
        // </Filters>
      ))}
    </Container>
  )
}

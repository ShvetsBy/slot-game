/* eslint-disable prettier/prettier */
import React from 'react'
import { useTick } from '@pixi/react'
import { ReelPositionType, ReelsContainerType } from '../types/reelSymbol'
import { ReelContainer } from './reel'
import { WinMsg } from './winMsg'
import { useAppSelector } from '../state/hooks'


export function ReelsContainer({
  reelsNumber,
  width,
  height,
  data,
  images,
  hasWinner,
  winMsg,
  tint,
}: ReelsContainerType) {
  
//  useTick(delta => console.log(delta) )
  const row: Array<ReelPositionType> = []
  for (let i = 0; i < reelsNumber; i++) {
    const reelPosition = i * width
    const item: ReelPositionType = {
      x: 0,
    }
    item.x = reelPosition
    row.push(item)
  }

  if (data.length) {
    return (
      <>
        {row.map((el, i) => (
          <ReelContainer
            x={el.x}
            height={height}
            width={width}
            data={data[i]}
            images={images}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            tint={tint}
          />
        ))}
        {hasWinner && <WinMsg text={winMsg} />}
      </>
    )
  }
  return null
}


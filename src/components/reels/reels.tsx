/* eslint-disable prettier/prettier */
import React from 'react'
import { ReelPositionType, ReelsContainerType } from '../types/reelSymbol'
import { ReelContainer } from './reel'
import { WinMsg } from './winMsg'



export function ReelsContainer({
  reelsNumber,
  width,
  height,
  data,
  images,
  hasWinner,
  winMsg,
  tint,
  isSpinning
}: ReelsContainerType) {
  

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
            isSpinning={isSpinning}
          />
        ))}
        {hasWinner && <WinMsg text={winMsg} />}
      </>
    )
  }
  return null
}


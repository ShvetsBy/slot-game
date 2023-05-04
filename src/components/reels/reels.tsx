import { useEffect, useState } from 'react'
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
  isSpinning,
}: ReelsContainerType) {
  const [row, setRow] = useState<ReelPositionType[]>([])

  useEffect(() => {
    for (let i = 0; i < reelsNumber; i++) {
      const reelPosition = i * width
      const item: ReelPositionType = {
        x: reelPosition,
      }
      setRow((prev) => [...prev, item])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

import { useEffect, useState } from 'react'
import { ReelPositionType, ReelsContainerType } from '../types/reelSymbol'
import { ReelContainer } from './reel'
import { WinMsg } from './winMsg'

export function ReelsContainer({
  reelsNumber,
  width,
  height,
  symbolsData,
  images,
  hasWinner,
  winMsg,
  tint,
  isSpinning,
}: ReelsContainerType) {
  const [row, setRow] = useState<ReelPositionType[]>([])

  useEffect(() => {
    for (let i = 0; i < reelsNumber; i++) {
      const item: ReelPositionType = {
        x: i * width,
      }
      setRow((prev) => [...prev, item])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (symbolsData.length) {
    return (
      <>
        {row.map((el, i) => (
          <ReelContainer
            x={el.x}
            height={height}
            width={width}
            symbolsData={symbolsData[i]}
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

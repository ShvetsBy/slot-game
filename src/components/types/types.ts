export type ReelSymbolType = {
  id: string
  name: string
  value: number
  img: string
  y: number
  win?: boolean
}

export type CardsImgRecordType = {
  [key: string]: string
}

export type ReelContainerType = {
  x: number
  symbolsData: Array<ReelSymbolType>
  width: number
  height: number
  images: CardsImgRecordType
  tint: string
  isSpinning: boolean
}

export type ReelPositionType = {
  x: number
}

export interface ReelsContainerType extends Omit<ReelContainerType, 'x' | 'symbolsData'> {
  reelsNumber: number
  hasWinner: boolean
  winMsg: string
  symbolsData: ReelSymbolType[][]
}

export type FindInArrayType = (
  array: ReelSymbolType[][],
  item: ReelSymbolType,
  index: number,
  result: ReelSymbolType[]
) => void

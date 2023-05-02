export type ReelSymbolType = {
  [x: string]: any // убрать колхоз
  id: string
  name: string
  value: number
  img: string
  y?: number
  win?: false
}

export type CardsImgRecordType = {
  [key: string]: string
}

export type ReelContainerType = {
  x: number
  data: Array<ReelSymbolType>
  width: number
  height: number
  images: CardsImgRecordType
  tint: string
  isSpinning: boolean
}

export type ReelPositionType = {
  x: number
}

export interface ReelsContainerType extends Omit<ReelContainerType, 'x' | 'data'> {
  reelsNumber: number
  hasWinner: boolean
  winMsg: string
  data: ReelSymbolType[][]
}

export type FindInArrayType = (
  array: Array<ReelSymbolType>,
  item: ReelSymbolType,
  index: number,
  result: ReelSymbolType[]
) => void

export type ReelSymbolType = {
  [x: string]: any // убрать колхоз
  id: string
  name: string
  value: string
  img: string
  y?: number
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
}

export type ReelPositionType = {
  x: number
}

export interface ReelsContainerType extends Omit<ReelContainerType, 'x'> {
  reelsNumber: number
  hasWinner: boolean
  winMsg: string
}

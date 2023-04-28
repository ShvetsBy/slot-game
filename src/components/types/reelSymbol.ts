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
  data: ReelSymbolType[]
  width: number
  height: number
  images: CardsImgRecordType
}

import { ReelSymbolType } from '../components/types/reelSymbol'

export const getResult = (data) => {
  const result: ReelSymbolType[] = []
  const visibleSymbols = 2
  for (let i = 0; i < data.length; i++) {
    const temp = data[i].filter((item: ReelSymbolType) => item.y! <= visibleSymbols)
    result.push(temp)
  }
  return result
}

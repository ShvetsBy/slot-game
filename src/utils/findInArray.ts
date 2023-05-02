import { FindInArrayType, ReelSymbolType } from '../components/types/reelSymbol'

export const findInArray: FindInArrayType = (array, item, index, result) => {
  let currentIndex: number = index
  const matchItem: ReelSymbolType = array[currentIndex].find(
    (el: ReelSymbolType) => el.name === item.name
  )

  if (matchItem) {
    result.push(matchItem)
    currentIndex += 1
    if (currentIndex <= result.length) {
      findInArray(array, item, currentIndex, result)
    }
  }
}

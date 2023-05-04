import { ReelSymbolType } from '../components/types/reelSymbol'
import { getResult } from './getResult'
import { findInArray } from './findInArray'

export const checkWin = (data: any[], matrix: any) => {
  let hasWinner = false
  const results: ReelSymbolType[] = getResult(data, matrix)
  let winline: ReelSymbolType[] = []
  const itemsToCheck = [...results]
  itemsToCheck[0].forEach((el: ReelSymbolType) => {
    const temp: ReelSymbolType[] = []

    temp.push(el)
    findInArray(results, el, 1, temp)
    if (temp.length > 2) {
      winline = [...temp]
    }
  })
  if (winline.length) {
    const cardValue = winline[0].value
    const coincidence = winline.length
    const multiplier = cardValue * coincidence
    hasWinner = true
    return { multiplier, hasWinner, winline }
  }
  return { hasWinner }
}

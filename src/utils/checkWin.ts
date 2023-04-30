import { ReelSymbolType } from '../components/types/reelSymbol'
import { getResult } from './getResult'
import { findInArray } from './findInArray'

export const checkWin = (data: any[]) => {
  console.log(data)
  let hasWinner = false
  const results: ReelSymbolType[] = getResult(data)
  const winline: any[] = []
  const itemsToCheck = results.splice(0, 1).flat()
  itemsToCheck.forEach((el) => {
    const temp: any[] = []
    temp.push(el)
    findInArray(results, el, 0, temp)
    if (temp.length > 2) {
      winline.push(temp)
    }
  })
  if (winline.length) {
    const cardValue = winline[0][0].value
    const coincidence = winline.length
    const multiplier = cardValue * coincidence
    hasWinner = true
    return { multiplier, hasWinner }
  }
  return { hasWinner }
}

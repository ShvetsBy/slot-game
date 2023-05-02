import { ReelSymbolType } from '../components/types/reelSymbol'
import { getResult } from './getResult'
import { findInArray } from './findInArray'

export const checkWin = (data: any[], matrix: any) => {
  // console.log(data)
  let hasWinner = false
  const results: ReelSymbolType[] = getResult(data, matrix)
  let winline: any[] = []

  // const itemsToCheck = results.splice(0, 1).flat()
  const itemsToCheck = [...results]
  console.log(itemsToCheck)
  itemsToCheck.forEach((el) => {
    const temp: any[] = []
    console.log(el)
    temp.push(el)
    findInArray(results, el, 0, temp)
    if (temp.length > 2) {
      winline = [...temp]
    }
  })
  if (winline.length) {
    const cardValue = winline[0].value
    const coincidence = winline.length
    const multiplier = cardValue * coincidence
    hasWinner = true
    console.log(hasWinner)
    return { multiplier, hasWinner, winline }
  }
  return { hasWinner }
}

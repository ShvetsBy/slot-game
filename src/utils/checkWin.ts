import { ReelSymbolType } from '../components/types/types'
import { getResult } from './getResult'

export const checkWin = (data: ReelSymbolType[][], matrix: number[][]) => {
  let hasWinner = false
  const results = getResult(data, matrix)
  const winline: ReelSymbolType[][] = []

  const symbolsToCheck: ReelSymbolType[] = [...results][0]
  const firstWinCombination: ReelSymbolType[] = [symbolsToCheck[0]]
  const secondWinCombination: ReelSymbolType[] = [symbolsToCheck[1]]
  const thirdWinCombination: ReelSymbolType[] = [symbolsToCheck[2]]

  const checkOtherReels = (position: number, arrayToCheck: ReelSymbolType[]) => {
    let currentIndex: number = position
    const temp: ReelSymbolType[] = [...results][currentIndex]
    const match: ReelSymbolType | undefined = temp.find(
      (el: ReelSymbolType) => el.name === arrayToCheck[0].name
    )

    if (match) {
      arrayToCheck.push(match)
      currentIndex += 1
      checkOtherReels(currentIndex, arrayToCheck)
    }
  }

  checkOtherReels(1, firstWinCombination)
  checkOtherReels(1, secondWinCombination)
  checkOtherReels(1, thirdWinCombination)

  if (firstWinCombination.length > 2) {
    winline.push(firstWinCombination)
  }

  if (secondWinCombination.length > 2) {
    winline.push(secondWinCombination)
  }

  if (thirdWinCombination.length > 2) {
    winline.push(thirdWinCombination)
  }

  if (winline.length) {
    // check here best winline combination
    const cardValue = winline[0][0].value
    const coincidence = winline[0].length
    const multiplier = cardValue * coincidence
    hasWinner = true
    return { multiplier, hasWinner, winline: winline[0] }
  }
  return { hasWinner }
}

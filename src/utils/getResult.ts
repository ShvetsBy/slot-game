import { ReelSymbolType } from '../components/types/types'

export const getResult = (data: ReelSymbolType[][], matrix: number[][]) => {
  let result: ReelSymbolType[][] = []
  const els: number[][] = []

  for (let i = 0; i < matrix.length; i++) {
    const elements = []
    const firstEl = matrix[i].indexOf(0)
    elements.push(firstEl)
    const secondEl = matrix[i].indexOf(1)
    elements.push(secondEl)
    const thirdEl = matrix[i].indexOf(2)
    elements.push(thirdEl)
    els.push(elements)
  }

  for (let i = 0; i < data.length; i++) {
    const temp = data[i].filter((item: ReelSymbolType) => els[i].includes(item.y))
    result = [...result, temp]
  }

  return result
}

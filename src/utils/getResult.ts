import { ReelSymbolType } from '../components/types/reelSymbol'

export const getResult = (data: any, matrix: any[][]) => {
  let result: ReelSymbolType[] = []
  const els: any[] = []

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
  // console.log(els)

  for (let i = 0; i < data.length; i++) {
    // console.log({ i })
    // console.log(els[i])
    const temp = data[i].filter((item: ReelSymbolType) => els[i].includes(item.y!))
    // console.log(temp)
    // result.push(temp)
    result = [...result, temp]
  }
  // console.log(result)
  return result
}

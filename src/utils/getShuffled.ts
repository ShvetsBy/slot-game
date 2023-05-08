export const getShuffled = (arr: number[]) => {
  const shuffledArr = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  return shuffledArr
}

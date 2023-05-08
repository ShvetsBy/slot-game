export const getRandom = (min: number, max: number) => {
  const low = Math.ceil(min)
  const high = Math.floor(max)
  return Math.floor(Math.random() * (high - low)) + low
}

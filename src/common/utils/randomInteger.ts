export const randomInteger = (min: number, max: number) => {
  const random = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(random)
}

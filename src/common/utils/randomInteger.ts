export const randomInteger = (min: number, max: number) => {
  const random = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(random)
}

export const randomCoordinates = () => {
  const num1 = randomInteger(100, 900)
  const num2 = randomInteger(100, 900)
  return Number(`0.000${num1}`) + Number(`0.000${num2}`)
}

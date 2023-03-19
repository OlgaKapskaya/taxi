export const randomInteger = (min: number, max: number) => {
  const randomNumber = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(randomNumber)
}

export const randomCoordinates = () => {
  const num1 = randomInteger(0, 900000)
  const num2 = randomInteger(0, 900000)
  return Number(`0.000${num1}`) + Number(`0.000${num2}`)
}

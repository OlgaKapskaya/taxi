import { CrewType } from '../types'
import { randomCoordinates } from './random'
import { cars } from '../constants/cars'

const getDistance = (coordinates1: number[], coordinates2: number[]) => {
  // @ts-ignore
  const distance = window.ymaps.coordSystem.geo.getDistance(coordinates1, coordinates2)
  return distance.toFixed(2)
}

export const generateCrews = (coordinates: number[]) => {
  const [lat, lon] = coordinates

  const crews: CrewType[] = cars.map((elem) => {
    const carCoordinates = [
      elem.crew_id % 2 === 0 ? lat + randomCoordinates() : lat - randomCoordinates(),
      elem.crew_id % 2 === 0 ? lon + randomCoordinates() : lon - randomCoordinates(),
    ]
    return {
      ...elem,
      lat: carCoordinates[0],
      lon: carCoordinates[1],
      distance: getDistance(coordinates, carCoordinates),
    }
  })

  return new Promise<CrewType[]>((res) => {
    setTimeout(() => res(crews), 1000)
  })
}

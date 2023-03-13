import { CrewType } from '../types'
import { randomCoordinates, randomInteger } from './randomInteger'

export const generateCrews = (coordinates: number[]) => {
  const [lat, lon] = coordinates

  const crews: CrewType[] = [
    {
      crew_id: 1,
      car: {
        mark: 'Chevrolet',
        model: 'Lacetti',
        color: 'синий',
        number: 'Е234КУ',
      },
      driver: {
        name: 'Деточкин',
        phone: '7788',
      },
      lat: lat + randomCoordinates(),
      lon: lon + randomCoordinates(),
      distance: randomInteger(100, 900),
    },
    {
      crew_id: 2,
      car: {
        mark: 'Audi',
        model: 'A3',
        color: 'синий',
        number: 'Е254КУ',
      },
      driver: {
        name: 'Сидоров',
        phone: '7789',
      },
      lat: lat - 0.0022892 + randomCoordinates(),
      lon: lon - 0.0030002 + randomCoordinates(),
      distance: randomInteger(100, 900),
    },
    {
      crew_id: 3,
      car: {
        mark: 'Hyundai',
        model: 'Solaris',
        color: 'белый',
        number: 'Ф567АС',
      },
      driver: {
        name: 'Петров',
        phone: '8877',
      },
      lat: lat + 0.001215 - randomCoordinates(),
      lon: lon + 0.001243 - randomCoordinates(),
      distance: randomInteger(100, 900),
    },
    {
      crew_id: 4,
      car: {
        mark: 'Honda',
        model: 'Accord',
        color: 'черный',
        number: 'A578HG',
      },
      driver: {
        name: 'Семенов',
        phone: '8879',
      },
      lat: lat - 0.001255 + randomCoordinates(),
      lon: lon + 0.001217 + randomCoordinates(),
      distance: randomInteger(100, 900),
    },
    {
      crew_id: 5,
      car: {
        mark: 'Citroen',
        model: 'C5',
        color: 'черный',
        number: 'S893HG',
      },
      driver: {
        name: 'Деревяго',
        phone: '4879',
      },
      lat: lat + 0.001237 + randomCoordinates(),
      lon: lon - 0.001269 + randomCoordinates(),
      distance: randomInteger(100, 900),
    },
  ]
  return new Promise<CrewType[]>((res) => {
    setTimeout(() => res(crews), 1000)
  })
}

import { CrewType } from './types'

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
    lat: 53.903735,
    lon: 27.556691,
    distance: undefined,
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
    lat: 53.904766,
    lon: 27.555018,
    distance: undefined,
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
    lat: 53.903401,
    lon: 27.556137,
    distance: undefined,
  },
]

const data = {
  '/api/crews': crews,
}

function delay(value: any) {
  return new Promise((res, rej) => setTimeout(value ? res : rej, 500, value))
}

export function mockFetch(url: any) {
  // @ts-ignore
  const payload = data[url]

  return delay(payload)
}

export function getCrews() {
  return mockFetch('/api/crews')
}

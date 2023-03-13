export type CrewType = {
  crew_id: number
  car: CarType
  driver: DriverType
  lat: number
  lon: number
  distance: number
}

export type CarType = {
  mark: string
  model: string
  color: string
  number: string
}
export type DriverType = {
  name: string
  phone: string
}

export type OrderType = {
  order_id: string
  source_time: number
  addresses: AddressType
  crew_id: number
}

export type AddressType = {
  address: string
  lat: number
  lon: number
}

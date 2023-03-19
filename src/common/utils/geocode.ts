import { AddressType } from '../types'
import { searchCrews } from '../../features/crews/crewsSlice'
import { addAddress } from '../../features/order/orderSlice'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'

export const geocode = (value: number[] | string, dispatch: ThunkDispatch<any, any, AnyAction>) => {
  //@ts-ignore
  window.ymaps.geocode(value).then((response: any) => {
    const firstGeoObject = response.geoObjects.get(0)
    if (Array.isArray(value)) {
      const address: AddressType = {
        address: firstGeoObject.getAddressLine(),
        lat: value[0],
        lon: value[1],
      }
      dispatch(searchCrews(value))
      dispatch(addAddress(address))
    } else {
      const coordinates = firstGeoObject.geometry.getCoordinates()
      const address: AddressType = {
        address: value,
        lat: coordinates[0],
        lon: coordinates[1],
      }
      dispatch(searchCrews(coordinates))
      dispatch(addAddress(address))
    }
  })
}

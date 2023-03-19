import { AddressType } from '../types'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { searchCrews, setCurrentAddress } from '../../app/appSlice'

export const geocode = (value: number[] | string, dispatch: ThunkDispatch<any, any, AnyAction>) => {
  //@ts-ignore
  window.ymaps.geocode(value).then((response: any) => {
    const firstGeoObject = response.geoObjects.get(0)
    if (Array.isArray(value)) {
      const address: AddressType = {
        address: `${firstGeoObject.getThoroughfare()} ${firstGeoObject.getPremiseNumber()}`,
        lat: value[0],
        lon: value[1],
      }
      dispatch(setCurrentAddress(address))
    } else {
      const coordinates = firstGeoObject.geometry.getCoordinates()
      const address: AddressType = {
        address: value,
        lat: coordinates[0],
        lon: coordinates[1],
      }
      dispatch(searchCrews(coordinates))
      dispatch(setCurrentAddress(address))
    }
  })
}

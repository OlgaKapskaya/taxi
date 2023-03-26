import { AddressType, CrewType } from '../types'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { removeOrder, searchCrews, setCrewToOrder, setCurrentAddress } from '../../app/appSlice'

export const geocode = (value: number[] | string, dispatch: ThunkDispatch<any, any, AnyAction>) => {
  dispatch(setCrewToOrder({} as CrewType))
  dispatch(removeOrder())
  //@ts-ignore
  window.ymaps.geocode(value).then((response: any) => {
    const firstGeoObject = response.geoObjects.get(0)
    if (Array.isArray(value)) {
      const street = firstGeoObject.getThoroughfare()
      const houseNumber = firstGeoObject.getPremiseNumber() ? firstGeoObject.getPremiseNumber() : ''

      const address: AddressType = {
        address: `${street} ${houseNumber}`,
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

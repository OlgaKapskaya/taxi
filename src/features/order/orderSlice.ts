import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { AddressType, OrderType } from '../../common/types'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {} as OrderType,
  reducers: {
    addOrder: (state, action: PayloadAction<AddressType>) => {
      state.addresses = action.payload
      state.source_time = Date.now()
      state.crew_id = 1
      state.order_id = nanoid()
    },
  },
})

export const { addOrder } = orderSlice.actions
export const orderReducer = orderSlice.reducer

export const getAddressByCoordinates = createAsyncThunk(
  'order/getAddressByCoordinates',
  (coordinates: number[], { dispatch }) => {
    //@ts-ignore
    window.ymaps
      .geocode(coordinates)
      .then((res: any) => {
        const firstGeoObject = res.geoObjects.get(0)
        const address: AddressType = {
          address: firstGeoObject.getAddressLine(),
          lat: coordinates[0],
          lon: coordinates[1],
        }
        dispatch(addOrder(address))
      })
      .catch(() => {
        return null
      })
  }
)

export const getCoordinatesByAddress = createAsyncThunk(
  'order/getCoordinatesByAddress',
  (searchAddress: string, { dispatch }) => {
    //@ts-ignore
    window.ymaps
      .geocode(searchAddress)
      .then((res: any) => {
        const firstGeoObject = res.geoObjects.get(0)
        const coordinates = firstGeoObject.geometry.getCoordinates()
        const address: AddressType = {
          address: searchAddress,
          lat: coordinates[0],
          lon: coordinates[1],
        }
        dispatch(addOrder(address))
      })
      .catch(() => {
        return null
      })
  }
)

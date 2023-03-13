import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { AddressType, OrderType } from '../../common/types'
import { getCrewsTC, setCrews } from '../crews/crewsSlice'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {} as OrderType,
  reducers: {
    addAddress: (state, action: PayloadAction<AddressType>) => {
      state.addresses = action.payload
      state.order_id = nanoid()
    },
    addOrder: (state, action: PayloadAction<number>) => {
      state.source_time = Date.now()
      state.crew_id = action.payload
    },
  },
})

export const { addAddress, addOrder } = orderSlice.actions
export const orderReducer = orderSlice.reducer

export const getAddressByCoordinates = createAsyncThunk(
  'order/getAddressByCoordinates',
  (coordinates: number[], { dispatch }) => {
    dispatch(setCrews([]))
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
        dispatch(getCrewsTC(coordinates))
        dispatch(addAddress(address))
      })
      .catch(() => {
        return null
      })
  }
)

export const getCoordinatesByAddress = createAsyncThunk(
  'order/getCoordinatesByAddress',
  (searchAddress: string, { dispatch }) => {
    dispatch(setCrews([]))
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
        dispatch(getCrewsTC(coordinates))
        dispatch(addAddress(address))
      })
      .catch(() => {
        return null
      })
  }
)

// export const createOrder = createAsyncThunk('order/createOrder', (crew_id: number, { dispatch }) => {
//   dispatch(addOrder(crew_id))
// })

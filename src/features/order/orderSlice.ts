import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { AddressType, OrderType } from '../../common/types'
import { geocode } from '../../common/utils/geocode'
import { setCrews } from '../../app/appSlice'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {} as OrderType,
  reducers: {
    addAddress: (state, action: PayloadAction<AddressType>) => {
      state.addresses = action.payload
    },
    addOrder: (state, action: PayloadAction<number>) => {
      state.source_time = Date.now()
      state.crew_id = action.payload
      state.order_id = nanoid(4)
    },
  },
})

export const { addAddress, addOrder } = orderSlice.actions
export const orderReducer = orderSlice.reducer

export const getAddressByCoordinates = createAsyncThunk(
  'order/getAddressByCoordinates',
  (coordinates: number[], { dispatch }) => {
    dispatch(setCrews([]))
    geocode(coordinates, dispatch)
  }
)

export const getCoordinatesByAddress = createAsyncThunk(
  'order/getCoordinatesByAddress',
  (searchAddress: string, { dispatch }) => {
    dispatch(setCrews([]))
    geocode(searchAddress, dispatch)
  }
)

export const createOrder = createAsyncThunk(
  'order/createOrder',
  (crew_id: number, { dispatch }) => {
    dispatch(addOrder(crew_id))
  }
)

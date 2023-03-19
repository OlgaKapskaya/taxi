import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { AddressType, CrewType, OrderType } from '../common/types'
import { generateCrews } from '../common/utils/generateCrews'
import { AppRootStateType } from './store'
import { geocode } from '../common/utils/geocode'

const initialState = {
  crews: [] as CrewType[],
  crewToOrder: {} as CrewType,
  order: {} as OrderType,
  currentAddress: {} as AddressType,
  isLoading: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setCurrentAddress: (state, action: PayloadAction<AddressType>) => {
      state.currentAddress = action.payload
    },
    setCrews: (state, action: PayloadAction<CrewType[]>) => {
      state.crews = action.payload
    },
    setCrewToOrder: (state, action: PayloadAction<CrewType>) => {
      state.crewToOrder = action.payload
    },
    addOrder: (state, action: PayloadAction<number>) => {
      state.order.source_time = Date.now()
      state.order.crew_id = action.payload
      state.order.order_id = nanoid(4)
    },
  },
})

export const { setIsLoading, setCurrentAddress, setCrews, setCrewToOrder, addOrder } =
  appSlice.actions
export const appReducer = appSlice.reducer

export const getCrews = createAsyncThunk(
  'app/getCrews',
  async (coordinates: number[], { dispatch }) => {
    const crews = await generateCrews(coordinates)
    dispatch(setCrews(crews))
  }
)

export const findCrewToOrder = createAsyncThunk(
  'app/findCrew',
  async (_, { dispatch, getState }) => {
    const state = getState() as AppRootStateType
    const crews = state.app.crews
    const sortedCrews = [...crews].sort((a, b) => a.distance - b.distance)
    dispatch(setCrewToOrder(sortedCrews[0]))
  }
)

export const searchCrews = createAsyncThunk(
  'app/searchCrews',
  async (coordinates: number[], { dispatch }) => {
    dispatch(setIsLoading(true))
    dispatch(setCrewToOrder({} as CrewType))
    dispatch(getCrews(coordinates))
      .then(() => dispatch(findCrewToOrder()))
      .finally(() => dispatch(setIsLoading(false)))
  }
)

export const getAddressByCoordinates = createAsyncThunk(
  'app/getAddressByCoordinates',
  (coordinates: number[], { dispatch }) => {
    // dispatch(setCrews([]))
    geocode(coordinates, dispatch)
  }
)

export const getCoordinatesByAddress = createAsyncThunk(
  'app/getCoordinatesByAddress',
  (searchAddress: string, { dispatch }) => {
    // dispatch(setCrews([]))
    geocode(searchAddress, dispatch)
  }
)

export const createOrder = createAsyncThunk('app/createOrder', (crew_id: number, { dispatch }) => {
  dispatch(addOrder(crew_id))
})

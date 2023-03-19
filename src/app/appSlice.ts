import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddressType, CrewType, OrderType } from '../common/types'
import { generateCrews } from '../common/utils/generateCrews'
import { AppRootStateType } from './store'

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
  },
})

export const { setIsLoading, setCurrentAddress, setCrews, setCrewToOrder } = appSlice.actions
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

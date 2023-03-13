import { CrewType } from '../../common/types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateCrews } from '../../common/utils/generateCrews'
import { AppRootStateType } from '../../app/store'

const initialState = {
  crews: [] as CrewType[],
  crewToOrder: {} as CrewType,
  isCrewsLoading: false,
}

export const crewsSlice = createSlice({
  name: 'crews',
  initialState: initialState,
  reducers: {
    setCrews: (state, action: PayloadAction<CrewType[]>) => {
      state.crews = action.payload
    },
    setCrewToOrder: (state, action: PayloadAction<CrewType>) => {
      state.crewToOrder = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isCrewsLoading = action.payload
    },
  },
})

export const { setCrews, setCrewToOrder, setIsLoading } = crewsSlice.actions
export const crewsReducer = crewsSlice.reducer

export const getCrews = createAsyncThunk(
  'crews/getCrews',
  async (coordinates: number[], { dispatch }) => {
    const crews = await generateCrews(coordinates)
    dispatch(setCrews(crews))
  }
)

export const findCrew = createAsyncThunk('crews/findCrew', async (_, { dispatch, getState }) => {
  const state = getState() as AppRootStateType
  const crews = state.crews.crews
  const sortedCrews = [...crews].sort((a, b) => a.distance - b.distance)
  dispatch(setCrewToOrder(sortedCrews[0]))
})

export const searchCrews = createAsyncThunk(
  'crews/searchCrews',
  async (coordinates: number[], { dispatch }) => {
    dispatch(setIsLoading(true))
    dispatch(setCrewToOrder({} as CrewType))
    dispatch(getCrews(coordinates))
      .then(() => dispatch(findCrew()))
      .finally(() => dispatch(setIsLoading(false)))
  }
)

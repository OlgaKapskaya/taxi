import { CrewType } from '../../common/types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateCrews } from '../../common/utils/generateCrews'

const initialState = {
  crews: [] as CrewType[],
}

type CrewsStateType = typeof initialState

export const getCrewsTC = createAsyncThunk('crews/getCrews', async (coordinates: number[]) => {
  return generateCrews(coordinates)
})

export const crewsSlice = createSlice({
  name: 'crews',
  initialState: initialState,
  reducers: {
    setCrews: (state, action: PayloadAction<CrewType[]>) => {
      state.crews = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCrewsTC.fulfilled, (state: CrewsStateType, action) => {
      state.crews = action.payload
    })
  },
})

export const { setCrews } = crewsSlice.actions
export const crewsReducer = crewsSlice.reducer

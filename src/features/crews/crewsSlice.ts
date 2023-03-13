import { CrewType } from '../../common/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { generateCrews } from '../../common/generateCrews'

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCrewsTC.fulfilled, (state: CrewsStateType, action) => {
      state.crews = action.payload
    })
  },
})

export const crewsReducer = crewsSlice.reducer

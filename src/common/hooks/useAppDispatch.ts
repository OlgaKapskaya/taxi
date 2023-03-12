import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { AppRootStateType } from '../../app/store'
import { useDispatch } from 'react-redux'

export type AppDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatch>()

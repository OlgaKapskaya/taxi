import Box from '@mui/material/Box/Box'
import s from '../Order.module.css'
import { AddLocation } from '@mui/icons-material'
import TextField from '@mui/material/TextField/TextField'
import { LoadingBtn } from '../../../common/components/buttons/LoadingBtn'
import { Button } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { getCoordinatesByAddress, setCrews, setCrewToOrder, setError } from '../../../app/appSlice'
import { addressValidation } from '../../../common/utils/addressValidation'
import { CrewType } from '../../../common/types'

export const SearchPanel = () => {
  const dispatch = useAppDispatch()
  const address = useAppSelector((state) => state.app.currentAddress.address)
  const isLoading = useAppSelector((state) => state.app.isLoading)

  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(address ? address : '')
  }, [address])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(setCrews([]))
    dispatch(setCrewToOrder({} as CrewType))
    setValue(e.currentTarget.value)
    dispatch(setError(''))
  }

  const onClickHandler = () => {
    if (addressValidation(value) === '') {
      dispatch(getCoordinatesByAddress(value))
    } else {
      dispatch(setError(addressValidation(value)))
    }
  }
  return (
    <Box className={s.box}>
      <AddLocation sx={{ color: 'action.active', mr: 1, my: 0.5, width: '30px', height: '30px' }} />
      <TextField
        value={value}
        onChange={onChangeHandler}
        placeholder="Введите адрес "
        variant="standard"
        className={s.input}
      />
      {isLoading ? (
        <LoadingBtn />
      ) : (
        <Button onClick={onClickHandler} variant="contained" disabled={value.trim() === ''}>
          Поиск
        </Button>
      )}
    </Box>
  )
}

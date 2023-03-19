import Box from '@mui/material/Box/Box'
import s from '../Order.module.css'
import { AddLocation } from '@mui/icons-material'
import TextField from '@mui/material/TextField/TextField'
import { LoadingBtn } from '../../../common/components/buttons/LoadingBtn'
import { Button } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { getCoordinatesByAddress } from '../orderSlice'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../../common/hooks/useAppSelector'

export const SearchAddress = () => {
  const dispatch = useAppDispatch()
  const address = useAppSelector((state) => state.order.addresses)
  const isCrewsLoading = useAppSelector((state) => state.app.isLoading)

  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(address ? address.address : '')
  }, [address])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
  }

  const onClickHandler = () => {
    if (value.trim() !== '') dispatch(getCoordinatesByAddress(value))
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
      {isCrewsLoading ? (
        <LoadingBtn />
      ) : (
        <Button onClick={onClickHandler} variant="contained" disabled={value.trim() === ''}>
          Поиск
        </Button>
      )}
    </Box>
  )
}

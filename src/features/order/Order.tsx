import { AddLocation } from '@mui/icons-material'
import Box from '@mui/material/Box/Box'
import TextField from '@mui/material/TextField/TextField'
import s from './Order.module.css'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { ChangeEvent, useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { getCoordinatesByAddress } from './orderSlice'

export const Order = () => {
  const dispatch = useAppDispatch()
  const address = useAppSelector((state) => state.order.addresses)

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
    <div className={s.container}>
      <Box className={s.box}>
        <AddLocation
          sx={{ color: 'action.active', mr: 1, my: 0.5, width: '30px', height: '30px' }}
        />
        <TextField
          value={value}
          onChange={onChangeHandler}
          placeholder="Введите адрес "
          variant="standard"
          className={s.input}
        />
      </Box>
      <Button onClick={onClickHandler} variant="contained" disabled={value.trim() === ''}>
        Search
      </Button>
    </div>
  )
}

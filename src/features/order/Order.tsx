import { AddLocation } from '@mui/icons-material'
import Box from '@mui/material/Box/Box'
import TextField from '@mui/material/TextField/TextField'
import s from './Order.module.css'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { useEffect, useState } from 'react'

export const Order = () => {
  const address = useAppSelector((state) => state.order.addresses)

  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(address ? address.address : '')
  }, [address])

  return (
    <div className={s.container}>
      <Box className={s.box}>
        <AddLocation
          sx={{ color: 'action.active', mr: 1, my: 0.5, width: '30px', height: '30px' }}
        />
        <TextField
          value={value}
          placeholder="Введите адрес "
          variant="standard"
          className={s.input}
        />
      </Box>
    </div>
  )
}

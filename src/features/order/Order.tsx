import { AddLocation } from '@mui/icons-material'
import Box from '@mui/material/Box/Box'
import TextField from '@mui/material/TextField/TextField'
import s from './Order.module.css'

export const Order = () => {
  return (
    <div className={s.container}>
      <Box className={s.box}>
        <AddLocation sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField placeholder="Введите адрес " variant="standard" className={s.input} />
      </Box>
    </div>
  )
}

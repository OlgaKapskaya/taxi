import Box from '@mui/material/Box/Box'
import s from '../Order.module.css'
import { AddLocation } from '@mui/icons-material'
import TextField from '@mui/material/TextField/TextField'
import { LoadingBtn } from '../../../common/components/buttons/LoadingBtn'
import { Button } from '@mui/material'
import { useSearchPanel } from './useSearchPanel'

export const SearchPanel = () => {
  const { value, isLoading, onChangeHandler, onClickHandler } = useSearchPanel()

  const button = isLoading ? (
    <LoadingBtn />
  ) : (
    <Button onClick={onClickHandler} variant="contained" disabled={value.trim() === ''}>
      Поиск
    </Button>
  )

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
      {button}
    </Box>
  )
}

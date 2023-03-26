import { CrewType } from '../../../common/types'
import { FC } from 'react'
import s from '../OrderPanel.module.css'
import { Button } from '@mui/material'
import { PhoneEnabled } from '@mui/icons-material'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { createOrder } from '../../../app/appSlice'
import { CrewCard } from './crew-card/CrewCard'

type CrewToOrderPropsType = {
  car: CrewType
}
export const OrderPanel: FC<CrewToOrderPropsType> = ({ car }) => {
  const dispatch = useAppDispatch()

  const onClickHandler = (id: number) => {
    dispatch(createOrder(id))
  }

  return (
    <div className={s.crewsContainer}>
      <span>Подходящий экипаж: </span>
      <div className={s.car}>
        <CrewCard car={car} />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => onClickHandler(car.crew_id)}
          endIcon={<PhoneEnabled />}
        >
          Заказать
        </Button>
      </div>
    </div>
  )
}

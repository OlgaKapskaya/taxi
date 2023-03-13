import { CrewType } from '../../../common/types'
import { FC } from 'react'
import s from '../Order.module.css'
import { Crew } from '../../crews/crew/Crew'
import { Button } from '@mui/material'
import { PhoneEnabled } from '@mui/icons-material'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { createOrder } from '../orderSlice'

type CrewToOrderPropsType = {
  car: CrewType
}
export const CrewToOrder: FC<CrewToOrderPropsType> = ({ car }) => {
  const dispatch = useAppDispatch()

  const onClickHandler = (id: number) => {
    dispatch(createOrder(id))
  }

  return (
    <div className={s.crewsContainer}>
      <span>Экипаж: </span>
      <div className={s.car}>
        <Crew car={car} fullInfo />
      </div>
      <Button
        variant="contained"
        onClick={() => onClickHandler(car.crew_id)}
        endIcon={<PhoneEnabled />}
      >
        Заказать
      </Button>
    </div>
  )
}

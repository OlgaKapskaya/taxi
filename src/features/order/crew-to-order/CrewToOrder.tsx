import { CrewType } from '../../../common/types'
import { FC } from 'react'
import s from '../Order.module.css'
import { Crew } from '../../crews/crew/Crew'
import { Button } from '@mui/material'

type CrewToOrderPropsType = {
  car: CrewType
}
export const CrewToOrder: FC<CrewToOrderPropsType> = ({ car }) => {
  return (
    <div className={s.crewsContainer}>
      <span>Экипаж: </span>
      <div className={s.car}>
        <Crew car={car} fullInfo />
      </div>
      <Button variant="contained"> Заказать </Button>
    </div>
  )
}

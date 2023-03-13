import { CrewType } from '../../../common/types'
import { FC } from 'react'
import s from '../Order.module.css'
import { Crew } from '../../crews/crew/Crew'

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
    </div>
  )
}

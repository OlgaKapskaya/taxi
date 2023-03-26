import { CrewType } from '../../../common/types'
import { FC } from 'react'
import { LocalTaxiOutlined } from '@mui/icons-material'
import s from './Crew.module.css'

type CrewPropsType = {
  car: CrewType
}
export const Crew: FC<CrewPropsType> = ({ car }) => {
  return (
    <div className={s.crew}>
      <LocalTaxiOutlined />
      <span className={s.item}>{car.car.mark}</span>
      <span className={s.item}>{car.car.model}</span>
      <span className={s.item}>{car.distance} m</span>
    </div>
  )
}

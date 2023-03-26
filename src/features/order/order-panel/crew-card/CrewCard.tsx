import { CrewType } from '../../../../common/types'
import { FC } from 'react'
import s from './CrewCard.module.css'
import { LocalTaxiOutlined } from '@mui/icons-material'

type CrewCardPropsType = {
  car: CrewType
}
export const CrewCard: FC<CrewCardPropsType> = ({ car }) => {
  return (
    <div className={s.crew}>
      <LocalTaxiOutlined className={s.icon} />
      <div className={s.car}>
        <span className={s.item}>
          {car.car.mark} {car.car.model}
        </span>
        <span className={s.item}>{car.car.color}</span>
        <span className={s.number}>{car.car.number}</span>
      </div>
    </div>
  )
}

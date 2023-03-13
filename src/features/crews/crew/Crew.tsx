import { CrewType } from '../../../common/types'
import { FC } from 'react'
import { LocalTaxiOutlined } from '@mui/icons-material'
import s from './Crew.module.css'

type CrewPropsType = {
  car: CrewType
  fullInfo?: boolean
}
export const Crew: FC<CrewPropsType> = ({ car, fullInfo }) => {
  return (
    <div className={s.crew}>
      <LocalTaxiOutlined />
      <span className={s.item}>{car.car.mark}</span>
      <span className={s.item}>{car.car.model}</span>
      {!fullInfo && <span className={s.item}>{car.distance} m</span>}
      {fullInfo && (
        <>
          <span className={s.item}>{car.car.color}</span>
          <span className={s.item}>{car.car.number}</span>
        </>
      )}
    </div>
  )
}

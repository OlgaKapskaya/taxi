import { useAppSelector } from '../../common/hooks/useAppSelector'
import s from './Crews.module.css'
import { Crew } from './crew/Crew'
import { Divider } from '@mui/material'

export const Crews = () => {
  const crews = useAppSelector((state) => state.app.crews)
  const cars = crews.map((elem) => <Crew key={elem.crew_id} car={elem} />)

  return (
    <div className={s.container}>
      {crews.length > 0 && (
        <>
          <span className={s.title}> Найденные автомобили: </span>
          <Divider />
          {cars}
        </>
      )}
    </div>
  )
}

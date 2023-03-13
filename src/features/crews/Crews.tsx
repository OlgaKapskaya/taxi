import { useAppSelector } from '../../common/hooks/useAppSelector'
import s from './Crews.module.css'
import { Crew } from './crew/Crew'

export const Crews = () => {
  const crews = useAppSelector((state) => state.crews.crews)
  return (
    <div className={s.container}>
      {crews.map((elem) => (
        <Crew key={elem.crew_id} car={elem} />
      ))}
    </div>
  )
}

import { YandexMap } from './YandexMap/YandexMap'
import { useAppSelector } from '../../hooks/useAppSelector'

export const MapComponent = () => {
  const crews = useAppSelector((state) => state.crews.crews)
  const personCoordinates = [53.902735, 27.555691]

  return <YandexMap crews={crews} personCoordinates={personCoordinates} />
}

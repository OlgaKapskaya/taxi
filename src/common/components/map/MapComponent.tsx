import { YandexMap } from './YandexMap/YandexMap'
import { useAppSelector } from '../../hooks/useAppSelector'

export const MapComponent = () => {
  const crews = useAppSelector((state) => state.app.crews)
  const personInformation = useAppSelector((state) => state.order.addresses)
  const personCoordinates = personInformation && [personInformation.lat, personInformation.lon]

  return <YandexMap crews={crews} personCoordinates={personCoordinates} />
}

import { YandexMap } from './YandexMap/YandexMap'
import { useAppSelector } from '../../hooks/useAppSelector'

export const MapComponent = () => {
  const crews = useAppSelector((state) => state.crews.crews)
  const personInformation = useAppSelector((state) => state.order.addresses)
  const personCoordinates = personInformation
    ? [personInformation.lat, personInformation.lon]
    : [53.90393596514452, 27.554710783934965]

  return <YandexMap crews={crews} personCoordinates={personCoordinates} />
}

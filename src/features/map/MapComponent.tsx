import { YandexMap } from '../../common/components/yandex-map/YandexMap'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { getAddressByCoordinates, setError } from '../../app/appSlice'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'

export const MapComponent = () => {
  const dispatch = useAppDispatch()

  const crews = useAppSelector((state) => state.app.crews)
  const personInformation = useAppSelector((state) => state.app.currentAddress)
  const personCoordinates = personInformation && [personInformation.lat, personInformation.lon]

  const onMapClick = (e: any) => {
    const coords = e.get('coords')
    dispatch(setError(''))
    dispatch(getAddressByCoordinates(coords))
  }

  return <YandexMap crews={crews} personCoordinates={personCoordinates} onMapClick={onMapClick} />
}

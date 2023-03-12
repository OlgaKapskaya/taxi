import { Map, Placemark, YMaps } from 'react-yandex-maps'
import React, { FC } from 'react'
import { CrewType } from '../../../types'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { getAddressByCoordinates } from '../../../../features/order/orderSlice'

type YandexMapPropsType = {
  crews: CrewType[]
  personCoordinates: number[]
}

export const YandexMap: FC<YandexMapPropsType> = ({ crews, personCoordinates }) => {
  const dispatch = useAppDispatch()

  const mapState = {
    center: personCoordinates,
    zoom: 17,
    searchControlProvider: 'yandex#search',
  }

  const onMapClick = (e: any) => {
    const coords = e.get('coords')
    dispatch(getAddressByCoordinates(coords))
  }

  return (
    <YMaps
      enterprise
      query={{
        apikey: '0f05e97d-4eeb-476c-8d2d-8d653d4eaa8c',
      }}
    >
      <Map
        state={mapState}
        modules={['Placemark', 'geocode']}
        onClick={onMapClick}
        width="100%"
        height="500px"
      >
        {/*person*/}
        <Placemark
          geometry={personCoordinates}
          options={{
            preset: 'islands#redPersonIcon',
          }}
        />

        {/*cars*/}
        {crews.map((elem) => (
          <Placemark
            key={elem.crew_id}
            geometry={[elem.lat, elem.lon]}
            options={{
              preset: 'islands#blackAutoIcon',
            }}
          />
        ))}
      </Map>
    </YMaps>
  )
}

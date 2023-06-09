import { Map, Placemark, YMaps } from 'react-yandex-maps'
import React, { FC } from 'react'
import { CrewType } from '../../types'
import { currentCity } from '../../constants/currentCity'

type YandexMapPropsType = {
  crews: CrewType[]
  personCoordinates?: number[]
  onMapClick: (e: any) => void
}

export const YandexMap: FC<YandexMapPropsType> = ({ crews, personCoordinates, onMapClick }) => {
  const mapState = {
    center:
      personCoordinates && personCoordinates[0]
        ? personCoordinates
        : [currentCity.lat, currentCity.lon],
    zoom: 17,
    searchControlProvider: 'yandex#search',
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
        height="calc(100vh - 100px)"
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

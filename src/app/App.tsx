import React, { useEffect } from 'react'
import './App.css'
import { getCrewsTC } from '../features/crews/crewsSlice'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { MapComponent } from '../common/components/map/MapComponent'
import { Order } from '../features/order/Order'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCrewsTC())
  })

  return (
    <div className="App">
      <Order />
      <MapComponent />
    </div>
  )
}

export default App

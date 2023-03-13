import React from 'react'
import './App.css'
import { MapComponent } from '../common/components/map/MapComponent'
import { Order } from '../features/order/Order'
import { Crews } from '../features/crews/Crews'

function App() {
  return (
    <div className="App">
      <Order />
      <Crews />
      <MapComponent />
    </div>
  )
}

export default App

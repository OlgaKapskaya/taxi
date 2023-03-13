import React from 'react'
import './App.css'
import { MapComponent } from '../common/components/map/MapComponent'
import { Order } from '../features/order/Order'

function App() {
  return (
    <div className="App">
      <Order />
      <MapComponent />
    </div>
  )
}

export default App

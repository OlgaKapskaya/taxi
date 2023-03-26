import React from 'react'
import './App.css'
import { MapComponent } from '../features/map/MapComponent'
import { Order } from '../features/order/Order'
import { Crews } from '../features/crews/Crews'
import 'react-toastify/dist/ReactToastify.css'
import { Notification } from '../common/components/notification/Notification'

function App() {
  return (
    <div className="App">
      <Order />
      <Crews />
      <MapComponent />
      <Notification />
    </div>
  )
}

export default App

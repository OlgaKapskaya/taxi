import React from 'react'
import './App.css'
import { MapComponent } from '../features/map/MapComponent'
import { Order } from '../features/order/Order'
import { Crews } from '../features/crews/Crews'
import { toast, ToastContainer } from 'react-toastify'
import { useAppSelector } from '../common/hooks/useAppSelector'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const order = useAppSelector((state) => state.app.order.order_id)
  const error = useAppSelector((state) => state.app.error)

  const notifySuccess = () => {
    toast.success(`Ваш заказ №${order} принят, ожидайте звонка`, {
      position: toast.POSITION.BOTTOM_LEFT,
      theme: 'colored',
    })
  }

  const notifyError = () => {
    toast.error(error, {
      position: toast.POSITION.BOTTOM_LEFT,
      theme: 'colored',
    })
  }

  if (order) notifySuccess()
  if (error) notifyError()

  return (
    <div className="App">
      <Order />
      <Crews />
      <MapComponent />
      <ToastContainer autoClose={5000} />
    </div>
  )
}

export default App

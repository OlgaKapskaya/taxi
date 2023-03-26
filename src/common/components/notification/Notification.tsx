import { ToastContainer } from 'react-toastify'
import React from 'react'
import { useNotification } from './useNotification'

export const Notifications = () => {
  useNotification()

  return <ToastContainer autoClose={5000} />
}

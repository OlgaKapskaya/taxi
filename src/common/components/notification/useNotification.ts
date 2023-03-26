import { useAppSelector } from '../../hooks/useAppSelector'
import { toast } from 'react-toastify'

export const useNotification = () => {
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
}

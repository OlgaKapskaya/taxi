import s from './Order.module.css'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { SearchPanel } from './search-address-panel/SearchPanel'
import { OrderPanel } from './order-panel/OrderPanel'

export const Order = () => {
  const crew = useAppSelector((state) => state.app.crewToOrder)

  return (
    <div className={s.container}>
      <SearchPanel />
      {crew?.car?.model && <OrderPanel car={crew} />}
    </div>
  )
}

import s from './Order.module.css'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { SearchAddress } from './search-address-panel/SearchAddress'
import { CrewToOrder } from './crew-to-order/CrewToOrder'

export const Order = () => {
  const crew = useAppSelector((state) => state.crews.crewToOrder)

  return (
    <div className={s.container}>
      <SearchAddress />
      {crew?.car?.model && <CrewToOrder car={crew} />}
    </div>
  )
}

import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { ChangeEvent, useEffect, useState } from 'react'
import { getCoordinatesByAddress, setCrews, setCrewToOrder, setError } from '../../../app/appSlice'
import { CrewType } from '../../../common/types'
import { addressValidation } from '../../../common/utils/addressValidation'

export const useSearchPanel = () => {
  const dispatch = useAppDispatch()
  const address = useAppSelector((state) => state.app.currentAddress.address)
  const isLoading = useAppSelector((state) => state.app.isLoading)

  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(address ? address : '')
  }, [address])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(setCrews([]))
    dispatch(setCrewToOrder({} as CrewType))
    setValue(e.currentTarget.value)
    dispatch(setError(''))
  }

  const onClickHandler = () => {
    if (addressValidation(value) === '') {
      dispatch(getCoordinatesByAddress(value))
    } else {
      dispatch(setError(addressValidation(value)))
    }
  }

  return { value, isLoading, onChangeHandler, onClickHandler }
}

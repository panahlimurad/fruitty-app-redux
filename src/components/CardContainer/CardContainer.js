import React, { useEffect } from 'react'
import Cards from '../Cards/Cards'
import CardsList from '../CardsList/CardsList'
import { useDispatch } from 'react-redux'
import { getOrder } from '../../services/order'
import { setOrders } from '../../features/dataSlice'

const CardContainer = () => {


  const dispatch = useDispatch()

  useEffect(() => {
    getOrder().then((res) => {
      dispatch(setOrders(res.data))
    })
  },[dispatch])

  return (
    <div className='flex'>
      <Cards />
      <CardsList/>
    </div>
  )
}

export default CardContainer

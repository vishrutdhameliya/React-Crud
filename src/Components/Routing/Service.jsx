import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'

const Service = () => {
    let param = useParams() 
  return (
    <div>Service {param.number}</div>
  )
}

export default Header(Service)
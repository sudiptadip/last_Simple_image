import React from 'react'
import { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Privaterote({childern}) {

  const isAuth = useSelector(data => data.isAuth)

  if(isAuth === false){
    return <Navigate to={'/login'} replace  />
  }
  return childern;
}

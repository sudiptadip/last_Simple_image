import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component.jsx/Navbar'

export default function Logout() {
  const isAuth = useSelector((data) => data.isAuth);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function logout(){
    dispatch({type: "Request Logout"})
    alert('Logout Successfully Completed')
    navigate('/login')
  }
  return (
    <div>
      <Navbar />
      <button onClick={logout} >Logout</button>
    </div>
  )
}

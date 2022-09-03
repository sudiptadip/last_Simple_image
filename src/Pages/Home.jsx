import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../Component.jsx/Navbar'

export default function Home() {
  const isAuth = useSelector((data) => data.isAuth);
  const token = useSelector((data) => data.token);
  return (
    <div>
        <Navbar/>
        <h1>{token}</h1>
        <img src="https://cdn.pixabay.com/photo/2022/05/01/09/55/spring-7167212_960_720.jpg" alt="" />
    </div>
  )
}

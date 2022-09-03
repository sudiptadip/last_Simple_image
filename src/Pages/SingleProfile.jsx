import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios  from 'axios'
import Navbar from '../Component.jsx/Navbar'

export default function SingleProfile() {
    const param = useParams() // https://reqres.in/api/users/2
    
    let dip = () => {
        axios
          .get(`https://reqres.in/api/users/${param.id}`)
          .then((res) => setobj(res.data.data));
      };
      useEffect(() => {
        dip();
      }, []);
    

    const [obj,setobj] = useState({})
    
  return (
    <div>
        <Navbar />
        <div style={{height: "150px"}}></div>
      <img width={"30%"} height={'300px'} src={obj.avatar} alt="" />
      <h1>{obj.first_name} {obj.last_name}</h1>
    </div>
  )
}

import React from "react";
import Navbar from "../Component.jsx/Navbar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Image() {
  let dip = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => setdata(res.data.data));
  };
  useEffect(() => {
    dip();
  }, []);


  const [data, setdata] = useState([]);
  return (
    <div>
      <Navbar />
      {data.map((e, i) => (
        <Link key={e.id} to={`/image/${e.id}`}>
          <h1>{e.first_name}</h1>
        </Link>
      ))}
    </div>
  );
}

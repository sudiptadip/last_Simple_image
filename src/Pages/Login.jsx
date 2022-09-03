import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component.jsx/Navbar";
import { logintoken } from "../Redux/Action";

export default function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("eve.holt@reqres.in");
  const [password, setpassword] = useState("cityslicka");
  const [logdata, setLogdata] = useState({});
  function Handelclick() {
    let obj = {
      email: email,
      password: password,
    };
    setLogdata(obj);
  }
  const dispatch = useDispatch();
  const token = useSelector((e) => e.token);
  const isAuth = useSelector((e) => e.isAuth);
  // console.log(token, isAuth);

  useEffect(() => {
    dispatch(logintoken(logdata));
  }, [logdata]);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  
  return (
    <div>
      <Navbar />
      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={Handelclick}>Submit</button>
      </div>
    </div>
  );
}

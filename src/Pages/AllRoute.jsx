import React from "react";
import { Route, Routes } from "react-router-dom";
import Privaterote from "../Component.jsx/Privaterote";
import Home from "./Home";
import Image from "./Image";
import Login from "./Login";
import Logout from "./Logout";
import SingleProfile from "./SingleProfile";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image" element={<Image />} />
      <Route
        path="/image/:id"
        element={
          <Privaterote childern={<SingleProfile />}>
            <SingleProfile />
          </Privaterote>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

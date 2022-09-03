import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";
import Searchbox from "./Searchbox";

export default function Navbar() {
  const isAuth = useSelector((data) => data.isAuth);
  const token = useSelector((data) => data.token);
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "80px",
          border: `1px solid black`,
          backgroundColor: "teal",
          display: "flex",
          justifyContent: "space-evenly",
          fontSize: "30px",
          fontWeight: "bold",
          alignItems: "center",
          color: "white",
        }}
      >
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          <p>Home</p>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to={"/image"}>
          <p>Image</p>
        </Link>
        {isAuth ? (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/logout"}
          >
            <p>Logout</p>
          </Link>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/login"}
          >
            <p>Login</p>
          </Link>
        )}
        <Searchbox />
      </div>
    </div>
  );
}

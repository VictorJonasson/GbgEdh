import React from "react";
import logo from "../Assets/Image/logo.png";
import { useNavigate } from "@reach/router";

function Logo() {
  const navigate = useNavigate();
  return (
    <img
      onClick={() => navigate("/*")}
      className="logo"
      src={logo}
      alt="Logo"
    ></img>
  );
}

export default Logo;

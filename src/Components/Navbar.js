import React from "react";
import "../CSS/NavbarComponent.css";
import Logo from "../Components/Logo";
import { useNavigate } from "@reach/router";
import homeicon from "../Assets/Image/Icons/home.png";
import statsicon from "../Assets/Image/Icons/stats.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="Navbar">
      <Logo></Logo>
      <img
        className="homeicon"
        onClick={() => navigate("/home")}
        alt="Qries"
        src={homeicon}
      ></img>
      <img
        className="statsicon"
        onClick={() => navigate("/stats")}
        alt="Qries"
        src={statsicon}
      ></img>
    </header>
  );
}

export default Navbar;

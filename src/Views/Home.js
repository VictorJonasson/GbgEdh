import React from "react";
import Navbar from "../Components/Navbar";
import "../CSS/HomeView.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="content">
          <h1>GBG EDH</h1>
          <p>Here you can check out the current EDH leaderbords.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { useNavigate } from "@reach/router";
import Navbar from "../Components/Navbar";
import "../CSS/StatsView.css";
import leader from "../Assets/Image/Icons/leader.png";

function StatsView() {
  const [stats, setStats] = useState([]);
  const navigate = useNavigate();

  function handleClick(event) {
    console.log(event);
  }

  useEffect(() => {
    fetch("http://demo7548510.mockable.io/")
      .then((response) => response.json())
      .then((result) => {
        setStats(result);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="wrapper">
        {stats && (
          <ol>
            {stats.map((stat, index) => (
              <div onClick={() => navigate("/detailedView", { state: stat })}>
                <li key={index.toString()}>
                  <div className="flexWrapper">
                    <div onClick={handleClick} className="left">
                      <img className="avatar" src={stat.avatar} alt="Logo" />
                    </div>
                    <div className="middle">
                      <p className="statCommander">{stat.commander}</p>
                      <p className="specify">Commander</p>
                      <p>{stat.owner}</p>
                      <p className="specify">Owner</p>
                    </div>

                    {stat.eloRanking === 1 ? (
                      <div className="right">
                        <img alt="leader" className="right" src={leader}></img>
                      </div>
                    ) : (
                      <div className="right">{stat.eloRanking}</div>
                    )}
                  </div>
                </li>
              </div>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default StatsView;

import React from "react";
import Navbar from "../Components/Navbar";
import "../CSS/DetailedView.css";

function DetailedView(props) {
  const state = props.location.state;
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="grid-container">
          <div className="Avatar">
            <img src={state.avatar} alt={state.owner} />
          </div>
          <div className="Owner">
            <p className="stats-owner">{state.owner}</p>
            <p className="description">Owner</p>
          </div>
          <div className="Commander">
            <p className="stats-commander">{state.commander}</p>
            <p className="description">Commander</p>
          </div>
          <div className="Stats">
            <div className="box a">
              <p className="stats">#{state.eloRanking}</p>
              <p className="description">elo-Ranking</p>
            </div>
            <div className="box b">
              <p className="stats">#{state.eloChangePerGame}</p>
              <p className="description">eloChangePerGame</p>
            </div>
            <div className="box c">
              <p className="stats">#{state.gamesPlayed}</p>
              <p className="description">Games played</p>
            </div>
            <div className="box d">
              <p className="stats">%{state.gamesWinPercent}</p>
              <p className="description">Game Win Percentage</p>
            </div>
            <div className="box e">
              <p className="stats">#{state.oppsWinPercent}</p>
              <p className="description">Opponent Win Percentage</p>
            </div>
            <div className="box f">
              <p className="stats">#{state.gamesPlayed}</p>
              <p className="description">Games played</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedView;

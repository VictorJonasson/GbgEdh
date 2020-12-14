import React from "react";
import { Router } from "@reach/router";
import Home from "../Views/Home";
import StatsView from "../Views/StatsView";
import DetailedView from "../Views/DetailedView";

function Route() {
  return (
    <Router>
      <Home path="/*" />
      <StatsView path="/stats" />
      <DetailedView path="/detailedView" />
    </Router>
  );
}

export default Route;
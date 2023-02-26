import React from "react";
import Image from "./Image";
import "./TopPicks.css";
import crown from "../../assets/images/Ranking_1st_Place.png";

export function TopPicks() {
  return (
    <div className="current-rankings">
      <h2>Current Rankings</h2>
      <img class="first-place" src={crown} alt="crown" width="100" />
      <div className="top-div">
        <div class="rank">1</div>
        <Image />
        <div class="rank">2</div>
        <Image />
        <div class="rank">3</div>
        <Image />
      </div>
    </div>
  );
}

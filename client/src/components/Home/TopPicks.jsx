import React from "react";
import Image from "./Image";
import "./TopPicks.css";

export function TopPicks({}) {
  return (
    <div className="current-rankings">
      <h2>Current Rankings</h2>
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

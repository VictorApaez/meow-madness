import React from "react";
import Image from "./Image";

export function TopPicks({}) {
  return (
    <div className="current-rankings">
      <h2>Current Rankings</h2>
      <div className="top-div">
        <Image />
        <Image />
        <Image />
      </div>
    </div>
  );
}

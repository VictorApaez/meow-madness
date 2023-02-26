import { TopPicks } from "./TopPicks";
import { Pof } from "./Pof";
import { Aside } from "./Aside";
import React from "react";
import Image from "./Image";
import "./Home.css";

function Home() {
  return (
    <div className="home-screen">
      <TopPicks />

      <Pof />

      <Aside />
    </div>
  );
}

export default Home;

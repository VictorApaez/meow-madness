import { TopPicks } from "./TopPicks";
import { Pof } from "./Pof";
import { Aside } from "./Aside";
import React from "react";
import "./Home.css";

function Home({ showLoginModal, setShowLoginModal }) {
  return (
    <div className="home-screen">
      <TopPicks />
      <Pof />
      <Aside
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
    </div>
  );
}

export default Home;

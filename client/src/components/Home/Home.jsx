import { TopPicks } from "./TopPicks";
import { Pof } from "./Pof";
import { Aside } from "./Aside";
import React, { useState } from "react";
import "./Home.css";
import Vote from "./Vote";
function Home({ showLoginModal, setShowLoginModal }) {
  const [toggleVote, setToggleVote] = useState(false);

  return (
    <div className="home-screen">
      <TopPicks />
      <Pof />
      <Aside
        setToggleVote={setToggleVote}
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      <Vote toggleVote={toggleVote} setToggleVote={setToggleVote} />
    </div>
  );
}

export default Home;

import React from "react";
import Image from "./Image";
import "./Home.css";

function Home() {
  return (
    <div className="home-screen">
      <div className="top-div">
        <Image />
        <Image />
        <Image />
      </div>
      <div className="pawl-of-fame">
        <h2>Pawl of Fame</h2>
        <div className="photo-grid">
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
      </div>
      <aside className="upload-div">
        <div className="upload-btn">Upload</div>
        <div className="upload-btn">Vote</div>
        <div className="rules">
          <h3>Rules</h3>
          <ul>
            <li>Rule 1</li>
            <li>Rule 2</li>
            <li>Rule 3</li>
          </ul>
          <ul>
            <li>Rule 4</li>
            <li>Rule 5</li>
            <li>Rule 6</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Home;

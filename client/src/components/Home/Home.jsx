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
      </aside>
    </div>
  );
}

export default Home;

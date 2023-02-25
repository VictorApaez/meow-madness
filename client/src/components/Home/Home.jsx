import React from "react";
import Image from "./Image";
import "./Home.css";

function Home() {
  return (
    <div className="home-screen">
      <div className="top-div">Top</div>
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
      <div className="upload-div">Upload</div>
    </div>
  );
}

export default Home;

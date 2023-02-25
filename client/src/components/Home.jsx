import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-screen">
      <div className="top-div">Top</div>
      <div className="photo-grid">
        <div className="photo-grid-item">Photo 1</div>
        <div className="photo-grid-item">Photo 2</div>
        <div className="photo-grid-item">Photo 3</div>
        <div className="photo-grid-item">Photo 4</div>
        <div className="photo-grid-item">Photo 5</div>
        <div className="photo-grid-item">Photo 6</div>
        <div className="photo-grid-item">Photo 7</div>
        <div className="photo-grid-item">Photo 8</div>
        <div className="photo-grid-item">Photo 9</div>
      </div>
      <div className="upload-div">Upload</div>
    </div>
  );
}

export default Home;

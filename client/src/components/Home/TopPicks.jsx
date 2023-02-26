import React, { useState, useEffect } from "react";
import Image from "./Image";
import "./TopPicks.css";
import crown from "../../assets/images/Ranking_1st_Place.png";
import { getAllImages } from "../../services/imagesService";

export function TopPicks() {
  const [images, setImages] = useState(null);
  useEffect(() => {
    async function getImages() {
      const res = await getAllImages();
      setImages(res.data);
    }
    getImages();
  }, []);

  return (
    <div className="current-rankings">
      <h2>Current Rankings</h2>
      <img class="first-place" src={crown} alt="crown" width="100" />
      {images && (
        <div className="top-div">
          <div class="rank">1</div>
          <Image data={images[4]} />
          <div class="rank">2</div>
          <Image data={images[2]} />
          <div class="rank">3</div>
          <Image data={images[1]} />
        </div>
      )}
    </div>
  );
}

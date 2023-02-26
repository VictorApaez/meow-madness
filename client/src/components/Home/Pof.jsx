import React, { useEffect, useState } from "react";
import Image from "./Image";
import { getAllImages } from "../../services/imagesService";

export function Pof() {
  const [images, setImages] = useState(null);
  useEffect(() => {
    async function getImages() {
      const res = await getAllImages();
      setImages(res.data);
    }
    getImages();
  }, []);

  return (
    <div className="pawl-of-fame">
      <h2>Pawl of Fame</h2>
      <div className="photo-grid">
        {images &&
          images.map((img, i) => {
            return <Image data={img} key={i} />;
          })}
      </div>
    </div>
  );
}

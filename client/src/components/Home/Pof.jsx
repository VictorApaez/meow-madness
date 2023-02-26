import React, { useEffect, useState } from "react";
import Image from "./Image";
import { getAllImages } from "../../services/imagesService";

export function Pof() {
  const [images, setImages] = useState();
  useEffect(() => {
    async function getImages() {
      const res = await getAllImages();
      console.log(res);
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
            <Image data={img} key={i} />;
          })}

        {/* <Image />
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
        <Image /> */}
      </div>
    </div>
  );
}

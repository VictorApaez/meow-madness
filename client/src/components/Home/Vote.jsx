import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Vote.css";
import Image from "./Image";
import { getAllImages } from "../../services/imagesService";
import axios from "axios";

function Vote({ setToggleVote, toggleVote }) {
  const [images, setImages] = useState(null);
  const [selectedValues, setSelectedValues] = useState([]);

  useEffect(() => {
    async function getImages() {
      const res = await getAllImages();
      setImages(res.data);
    }
    getImages();
  }, []);

  const handleSubmit = (e) => {
    const checkedBoxes = e.target.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const selectedIds = Array.from(checkedBoxes).map((checkbox) =>
      checkbox.getAttribute("data-imgid")
    );

    selectedIds.forEach(async (id) => {
      await axios.get(`http://localhost:5000/vote/${id}`);
    });
    console.log(selectedIds);
  };

  return (
    <Modal
      isOpen={toggleVote}
      onRequestClose={() => setToggleVote(false)}
      className="vote-modal"
      overlayClassName="vote-overlay"
    >
      <form className="vote-form" onSubmit={handleSubmit}>
        <div className="vote-image-container">
          {images &&
            images.map((img, i) => {
              return (
                <div className="vote-image-card" key={i}>
                  <div
                    style={{
                      background: `url(${img.imageUrl})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "200px",
                      height: "200px",
                    }}
                  />
                  <label>
                    <input
                      type="checkbox"
                      id={`img-${img._id}`}
                      data-imgid={img._id}
                      className="vote-image-card-checkbox"
                    />
                  </label>
                </div>
              );
            })}
        </div>
        <button className="vote-modal-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </Modal>
  );
}

export default Vote;

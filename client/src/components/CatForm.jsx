import React, { useState } from "react";
import "../styles/CatForm.css";
import Modal from "react-modal";
import { uploadCatImg } from "../services/uploadService";

function CatForm() {
  const [toggleCatForm, setToggleCatForm] = useState(false);
  const [file, setFile] = useState(null);
  const [imageData, setImageData] = useState(null);

  async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("username", "victor");
    const res = await uploadCatImg(formData);
    setImageData(res.data);
    setToggleCatForm(false);
  }

  return (
    <div className="cat-form">
      <button
        className="cat-form__toggle-btn"
        onClick={() => setToggleCatForm(true)}
      >
        Upload
      </button>
      {imageData && <img alt="" src={imageData.imageUrl}></img>}
      <Modal
        isOpen={toggleCatForm}
        onRequestClose={() => setToggleCatForm(false)}
      >
        <button
          className="cat-form__toggle-btn"
          onClick={() => setToggleCatForm(false)}
        >
          X
        </button>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <h2 className="cat-form__title">Upload your cat pic</h2>
          <input
            type="file"
            id="file-input"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
}

export default CatForm;

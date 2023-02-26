import React, { useState } from "react";
import "../styles/CatForm.css";
import Modal from "react-modal";
import { uploadCatImg } from "../services/uploadService";

function CatForm({ toggleCatForm, setToggleCatForm }) {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(
    "https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg"
  );
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

  function handleFileInputChange(e) {
    setFile(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  }

  return (
    <div>
      {imageData ? (
        <img alt="" src={imageData.imageUrl} />
      ) : (
        <img alt="" src={imagePreview} />
      )}
      <Modal
        isOpen={toggleCatForm}
        onRequestClose={() => setToggleCatForm(false)}
        className="cat-form-modal"
        overlayClassName="cat-form-overlay"
      >
        <form className="cat-form" onSubmit={(e) => handleFormSubmit(e)}>
          <h4 className="cat-form__title">Select Your Image</h4>
          <div className="file-input-container">
            <label className="file-input">
              <input type="file" onChange={handleFileInputChange} />
              <img className="cat-form-file-input-img" src={imagePreview} />
            </label>
            <div className="file-input-icon">+</div>
          </div>
          <button className="cat-form-upload-btn" type="submit">
            Upload Image
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default CatForm;

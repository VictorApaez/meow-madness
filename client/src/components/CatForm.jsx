import React, { useState } from "react";
import Modal from "react-modal";

function CatForm() {
  const [toggleCatForm, setToggleCatForm] = useState(false);
  return (
    <div className="cat-form">
      <button
        className="cat-form__toggle-btn"
        onClick={() => setToggleCatForm(true)}
      >
        Upload
      </button>
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
        <h2 className="cat-form__title">Upload your cat pic</h2>
      </Modal>
    </div>
  );
}

export default CatForm;

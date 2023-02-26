import React, { useState, useContext } from "react";
import CatForm from "../CatForm";
import { UserContext } from "../../context/userContext";

export function Aside({ setShowLoginModal, setToggleVote }) {
  const [toggleCatForm, setToggleCatForm] = useState(false);
  const { user } = useContext(UserContext);

  function uploadImage() {
    if (user !== null) {
      setToggleCatForm(true);
    } else {
      setShowLoginModal(true);
    }
  }

  function voteButton() {
    console.log("YUPP");
    setToggleVote(true);
  }

  return (
    <aside className="upload-div">
      <div className="upload-btn" onClick={uploadImage}>
        Upload
      </div>
      <div className="upload-btn" onClick={voteButton}>
        Vote
      </div>
      <div className="rules">
        <h3>Rules</h3>
        <ul>
          <li>Each user can vote for up to 9 cats daily</li>
          <li>You may vote for each cat once</li>
          <li>Winners are announced weekly</li>
        </ul>
      </div>
      <CatForm
        setToggleCatForm={setToggleCatForm}
        toggleCatForm={toggleCatForm}
      />
    </aside>
  );
}

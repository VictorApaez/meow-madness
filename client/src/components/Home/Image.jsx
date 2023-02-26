import React from "react";
import "./Image.css";

function Image({ data }) {
  // Define an array of possible usernames
  const possibleUsernames = [
    "KittyLover123",
    "CatMom",
    "WhiskerWatcher",
    "PurrfectFriend",
    "FluffyFanatic",
    "MeowMaster",
  ];

  // Choose a random username from the array
  const randomUsername =
    possibleUsernames[Math.floor(Math.random() * possibleUsernames.length)];

  if (data) {
    return (
      <div
        className="image"
        style={{
          background: `url(${data.imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="image-vote-count">{data.votes} Votes</div>
        <div className="image-description">{randomUsername}</div>
      </div>
    );
  }
  return <div>test</div>;
}

export default Image;

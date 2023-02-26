import React from "react";
import "./Image.css";

function Image({ data }) {
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
        {/* <div className="image-description">{data.user.username}</div> */}
      </div>
    );
  }
  return <div>test</div>;
}

export default Image;

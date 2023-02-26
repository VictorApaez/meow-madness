import React from "react";
export function Aside({}) {
  return (
    <aside className="upload-div">
      <div className="upload-btn">Upload</div>
      <div className="upload-btn">Vote</div>
      <div className="rules">
        <h3>Rules</h3>
        <ul>
          <li>Rule 1</li>
          <li>Rule 2</li>
          <li>Rule 3</li>
        </ul>
        <ul>
          <li>Rule 4</li>
          <li>Rule 5</li>
          <li>Rule 6</li>
        </ul>
      </div>
    </aside>
  );
}

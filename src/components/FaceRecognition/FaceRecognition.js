import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className="center">
      <div className="mt2 absolute">
        <img src= {imageUrl} alt="" id="inputImage" width="500px" />
        <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>
        </div>
      </div>
    </div>
  )
}

export default FaceRecognition;
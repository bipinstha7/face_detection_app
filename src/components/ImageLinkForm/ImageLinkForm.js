import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures.Give it a try."}
      </p>
      <div className="center">   {/*makes responsive, without this form doesn't shrink in small screen  */}
        <div className="form pa4 br3 shadow-5">
          <input type="text" className="f4 pa2 w-70 bw0" onChange={onInputChange} />
          <button 
            className="f4 pa2 pointer grow bg-light-purple white w-30 bw0" 
            onClick={onButtonSubmit} >Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
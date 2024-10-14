import React, { useState } from "react";
import "./New.css";
function New( ) {
   const [text, setText] = useState("frontend Quiz")

  return (

    <div className="container">
      <div className="inner-container">
        <div className="item">
          Welcome to <br />{text}
        </div>
        <div className="items">
          <div className="inner-items" onClick={()=>{
            setText("HTML")
          }}><img src="https://picsum.photos/536/354" alt="" /> HTML</div>
          <div className="inner-items" onClick={()=>{
            setText("CSS")
          }}> <img src="https://picsum.photos/536/354" alt="" />  CSS</div>
          <div className="inner-items" onClick={()=>{
            setText("Javascript")
          }}> <img src="https://picsum.photos/536/354" alt="" /> Javascript</div>
          <div className="inner-items"onClick={()=>{
            setText("Accessbility")
          }}><img src="https://picsum.photos/536/354" alt="" />  Accessbility</div>
        </div>
      </div>
    </div>
  );
}

export default New;

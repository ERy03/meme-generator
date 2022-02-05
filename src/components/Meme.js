import React from "react";

export default function Meme(){
  function getMemeImage(){
    console.log("getMemeImage");
  }
  return(
  <main>
    <div className="form">
      <input type="text" name="topText" placeholder="Top Text" className="form__input"/>
      <input type="text" name="bottomText" placeholder="Bottom Text" className="form__input"/>
      <button className="form__button" onClick={getMemeImage}>Get a new meme image 🖼</button>
    </div>
  </main>
  )
}

import React from "react";
import memesData from "../memesData";

export default function Meme(){
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomIndex].url);
  }
  return(
  <main>
    <div className="form">
      <input type="text" name="topText" placeholder="Top Text" className="form__input"/>
      <input type="text" name="bottomText" placeholder="Bottom Text" className="form__input"/>
      <button className="form__button" onClick={getMemeImage}>Get a new meme image 🖼</button>
    </div>
    <img src={memeImage} className="meme__image" alt="meme"/>
  </main>
  )
}

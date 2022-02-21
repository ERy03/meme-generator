import React from "react";
import memesData from "../memesData";

export default function Meme(){
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImags, setAllMemeImags] = React.useState(memesData);

  function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomIndex].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImg: url
    }));
  }

  return(
  <main>
    <div className="form">
      <input type="text" name="topText" placeholder="Top Text" className="form__input"/>
      <input type="text" name="bottomText" placeholder="Bottom Text" className="form__input"/>
      <button className="form__button" onClick={getMemeImage}>Get a new meme image 🖼</button>
    </div>
    <img src={meme.randomImg} className="meme__image" alt="meme"/>
  </main>
  )
}

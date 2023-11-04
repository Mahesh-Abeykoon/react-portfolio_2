import { useState } from 'react';
import aL from '../assets/aL.png';
import aR from '../assets/aR.png';
import './works.scss'

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    
    {
      id:"1",
      icon: require("../assets/dysM.png"),
      title: "DysM",
      des: "Final year research project focused on creating a mobile application to assist dyslexic children.",
      img: require("../assets/dysM.png"),
    },

    {
      id:"2",
      icon: require("../assets/englishApp.png"),
      title: "English Learning App",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ratione",
      img: require("../assets/englishApp.png"),
    },

    {
      id:"3",
      icon: require("../assets/unity3d.png"),
      title: "Unity Game",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ratione",
      img: require("../assets/unity3d.png"),
    },

    {
      id:"4",
      icon: require("../assets/mernApp.png"),
      title: "Mern App",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ratione",
      img: require("../assets/mernApp.png"),
    },
  ]

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) 
                   : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
  }

  return (
    <div className='works' id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)` }}>
       {data.map((d) =>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} />
                </div>
                <h2>{d.title}</h2>
                <p>{d.des}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img 
                src={d.img}
                alt=""
              />
            </div>
          </div>
        </div>
       ))}  
      </div>
      <img src={aL} className="arrow left"  onClick={()=>handleClick("left")}/>
      <img src={aR} className="arrow right" onClick={()=>handleClick("")}/>
    </div>
  )
}
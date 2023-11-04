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
      title: "Mobile App",
      des: "Final year research project focused on creating a mobile application to assist dyslexic children.",
      img: require("../assets/dysM.png"),
      projects: "https://github.com/Mahesh-Abeykoon/dyslexia-app-for-kids",
    },

    {
      id:"2",
      icon: require("../assets/englishApp.png"),
      title: "English Learning App",
      des: "Developed an English Learning Android application using React-Native",
      img: require("../assets/englishApp.png"),
      projects: "https://github.com/Mahesh-Abeykoon/smart-english-learningApp",
    },

    {
      id:"3",
      icon: require("../assets/unity3d.png"),
      title: "Unity Game",
      des: "This is a simple and attractive Unity 3D Game",
      img: require("../assets/unity3d.png"),
      projects: "https://github.com/Mahesh-Abeykoon/unity-roll-a-ball_mini-game/tree/master",
    },

    {
      id:"4",
      icon: require("../assets/mernApp.png"),
      title: "Mern App",
      des: "Created a web application enabling users to post articles",
      img: require("../assets/mernApp.png"),
      projects: "https://github.com/Mahesh-Abeykoon/MERN-blog-application",
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
                <span>{d.projects}</span>
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
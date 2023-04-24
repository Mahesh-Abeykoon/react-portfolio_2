import './works.scss'
import aL from '../assets/aL.png';
import aR from '../assets/aR.png';
import { useState } from 'react';

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    
   

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

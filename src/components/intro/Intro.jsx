import  './intro.scss';
import img from '../assets/1.jpg'
import arrow from '../assets/arrow.png'
import {init} from 'ityped';
import { useEffect, useRef } from 'react';
import '../../stars.scss'
export default function Intro() {

  const textRef = useRef();
  
  useEffect(() => {
    // console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web App","Mobile App"]
    })
  }, [])

  return (
    <div className="intro" id="intro">  
      <div className="left">
        <div className="imageContainer">
          <img src={img} />
        </div>

      </div>
     
      <div className="right">
            {/* import stars from stars.scss */}
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="wrapper">
          <h2>Hi there I'm</h2>
          <h1>Mahesh Abeykoon</h1>
          <h3>
            <span ref={textRef}></span> Developer
            </h3>
        </div>
        <a href='#portfolio'>
          <img src={arrow} alt=''/>

        </a>
      </div>

    </div>

  )
}

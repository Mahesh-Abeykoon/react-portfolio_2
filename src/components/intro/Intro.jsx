import React, { useState, useEffect, useRef } from 'react';
import './intro.scss'
import img from '../assets/1.jpg'
import arrow from '../assets/arrow.png'
import {init} from 'ityped';
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

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Run this effect only once when the component mounts

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  let greeting;
  // let gradientColor;

  if (hours < 12) {
    greeting = 'Good Morning!';
    // gradientColor = 'linear-gradient(90deg, #4ca5ff 2.34%, #b673f8 100.78%)';
  } else if (hours < 18) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }
  // const customeStyle = {
  //   color: gradientColor,
  // };
  // const timeStyle = {
  //   position: 'absolute',
  //   top: 10,
  //   right: 10,
  //   fontSize: '1.5rem',
  // };

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
        <div className='time'>
          <h2>{`${hours}:${minutes}:${seconds}`}</h2>
          <h3>{greeting}</h3>
        </div>
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

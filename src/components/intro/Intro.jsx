import  './intro.scss';
import img from '../assets/1.jpg'
import arrow from '../assets/arrow.png'
import {init} from 'ityped';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants';
export default function Intro() {
  
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
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
      {/* add motion icons */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
        >
        {[images.java, images.spring_boot, images.unity, images.android, images.react, images.sass, images.firebase, images.git].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
        ))}
      </motion.div>  
      <div className="right">
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

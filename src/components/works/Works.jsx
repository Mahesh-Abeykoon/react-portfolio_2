import { useState } from 'react';
import aL from '../assets/aL.png';
import aR from '../assets/aR.png';
import './works.scss'

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    
    {
      id:"1",
      icon: "https://img.favpng.com/19/25/4/download-mobile-app-euclidean-vector-icon-png-favpng-rY9tQq5pa0sYDjjQg5Hpf6iTZ.jpg",
      title: "Mobile Application",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ratione",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.3dgSNrMDnSmghQElypFW-wHaE8%26pid%3DApi&f=1&ipt=50e7abe88475e1706b8f025895d482ddc3ebb1383f5c52d3513ad43f76f5357c&ipo=images",
    },

    {
      id:"2",
      icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wxr2KzSY6TFf-QpNtRYIFwHaHX%26pid%3DApi&f=1&ipt=264179467b6ef48bfea6968843f8a98cc10b87dcaefc272b3dd2b743a58de20d&ipo=images",
      title: "Web Application",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ratione",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.qualogy.com%2Fstatic%2Fupload%2Flightbox%2F696354d6-7031-4fda-a024-a233b3ab00b2%2F1.png&f=1&nofb=1&ipt=baccd4a5a40dcffdde24228a2372db42d1e03a9daff22a3a73242a25411015c7&ipo=images",
    },

    {
      id:"3",
      icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.TDDChp5nL5ThuVcWbK0JlgHaHv%26pid%3DApi&f=1&ipt=73402d7c471915579c4fff097f028c900d57ad7ec2b79d195370a95f5640895b&ipo=images",
      title: "Unity Game",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ratione",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.K4HxPY0Vb37ccNwhILBumQHaEK%26pid%3DApi&f=1&ipt=eda27f8e2aa29fe21835467255ae0ad97b69317bb797edfdab6cc9c807dc2ac7&ipo=images",
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
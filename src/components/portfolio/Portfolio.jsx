import React, { useEffect, useState } from 'react'
import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import {portfolioMobile,portfolioWeb,portfolioGame,portfolioOther} from "../../data";


export default function Portfolio() {
  const [selected, setSelected] = useState("mobile")
  const [data, setData] = useState([]);

  const list = [
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
    {
      id: "game",
      title: "Game"
    },
    {
      id: "other",
      title: "Other"
    }
  ]

useEffect(()=> {
  switch(selected){
      
      case "web":
        setData(portfolioWeb)
        break;
      case "mobile":
        setData(portfolioMobile)
        break;
      case "game":
        setData(portfolioGame)
        break;
      case "other":
        setData(portfolioOther)
        break;
       default:
        setData(portfolioGame)

  }
},[selected])

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
            />
        ) )}
      </ul>

      <div className='container'>
        {data.map(d=>(
           <div className='item'>
           <img
           src={d.img}
           alt="" 
           />
           <h3>{d.title}</h3>
         </div>
        ))}
       
      </div>
    </div>
  );
}

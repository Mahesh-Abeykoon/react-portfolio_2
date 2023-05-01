import { MenuOpen } from '@mui/icons-material';
import './topbar.scss'
import MailIcon from '@mui/icons-material/Mail';
import {Avatar} from '@mui/material';
import img from '../assets/11.jpg'
import { FaLinkedin, FaGithub, FaMedium ,FaInstagram, FaFacebook} from "react-icons/fa";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left"> 
          <a href="#intro" className="logo">
          </a>   
          <Avatar
              src={img}
              sx={{ width: 40, height: 40 }}
            />
          <div className="itemContainer">
            <MailIcon className="icon"/>
            <span>maheshpabeykoon@gmail.com</span>
          </div>
          <div className= 'contact-info'>
              <a className='fa-icon' href="https://github.com/Mahesh-Abeykoon">
                <div><FaGithub /> </div>
              </a>
              <a className='fa-icon' href="https://www.linkedin.com/in/mahesh-abeykoon">
                <div><FaLinkedin /> </div>
              </a>
              <a className='fa-icon' href="https://medium.com/@maheshoabeykoon">
                <div><FaMedium /> </div>
              </a>
              <a className='fa-icon' href="https://instagram.com/mahe__sh">
                <div><FaInstagram /> </div>
              </a>
              <a className='fa-icon' href="https://www.facebook.com/Mahesh0Abeykoon">
                <div><FaFacebook /> </div>
              </a>
          </div>
         
          {/* <div className="itemContainer">
            <AnalyticsIcon className="icon"/>
            <span>maheshpabeykoon@gmail.com</span>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

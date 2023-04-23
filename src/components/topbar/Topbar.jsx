import { MenuOpen } from '@mui/icons-material';
import './topbar.scss'
import MailIcon from '@mui/icons-material/Mail';
import {Avatar} from '@mui/material';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left"> 
          <a href="#intro" className="logo">
          </a>   
          <Avatar
              //src="/assets/1.jpg"
              src="https://maheshabeykoon.github.io/assets/img/profile-img.jpg"
              sx={{ width: 40, height: 40 }}
            />
          <div className="itemContainer">
            <MailIcon className="icon"/>
            <span>maheshpabeykoon@gmail.com</span>
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

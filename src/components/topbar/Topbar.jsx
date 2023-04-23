import { MenuOpen } from '@mui/icons-material';
import './topbar.scss'
import AnalyticsIcon from '@mui/icons-material/Analytics';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
          </a>
          <div className="itemContainer">
            <AnalyticsIcon className="icon"/>
            <span>Mahesh</span>
          </div>
          <div className="itemContainer">
            <AnalyticsIcon className="icon"/>
            <span>0717575</span>
          </div>
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

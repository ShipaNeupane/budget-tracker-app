import { Link } from 'react-router-dom';
import './NavBar.scss';
import logo from "../../assets/logo.png"
import profile from "../../assets/profilePic.jpg"
import bell from '../../assets/icons/bell.png'
import setting from '../../assets/icons/setting.png'

const NavigationBar = () => {
    return (
        <nav className="navigation-bar">
        
        <div className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></div>
        
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/transaction">Transactions</Link></li>
            <li>Goals</li>
        </ul>
        
        <div className="icons">
            <img src={setting} alt="Settings" className="icon-settings" />
            <img src={bell} alt="Notificaton" className="icon-notifications" />
            <img src={profile} alt="Profile" className="profile-pic" />
        </div>
        
        </nav>
    );
};

export default NavigationBar;

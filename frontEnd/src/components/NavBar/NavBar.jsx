import { Link } from 'react-router-dom';
import './NavBar.scss';
import logo from "../../assets/logo.png"
import profile from "../../assets/profilePic.jpg"

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
            <i className="icon-settings"></i>
            <i className="icon-notifications"></i>
            <img src={profile} alt="Profile" className="profile-pic" />
        </div>
        
        </nav>
    );
};

export default NavigationBar;

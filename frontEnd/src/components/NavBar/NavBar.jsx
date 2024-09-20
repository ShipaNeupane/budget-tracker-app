import './NavBar.scss';
import logo from "../../assets/logo.png"
import profile from "../../assets/profilePic.jpg"

const NavigationBar = () => {
    return (
        <nav className="navigation-bar">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <ul className="nav-links">
            <li>Home</li>
            <li>Transactions</li>
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

import './Header.scss';

const Header = () => {
    return (
        <header className="header">
        
        <h1>Hello, User!</h1>

        <div className="date-options">

            <button className="selected">This month</button>
            <button>Last month</button>
            <button>This year</button>
            <button>Select period</button>

        </div>
        </header>
    );
};

export default Header;

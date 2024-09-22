import './Header.scss';

const Header = ({ period, setPeriod }) => {
    return (
        <header className="header">
            <h1>Hello, User!</h1>

            <div className="date-options">
                <button
                    className={period === 'thisMonth' ? 'selected' : ''}
                    onClick={() => setPeriod('thisMonth')}
                >
                    This month
                </button>
                <button
                    className={period === 'lastMonth' ? 'selected' : ''}
                    onClick={() => setPeriod('lastMonth')}
                >
                    Last month
                </button>
                <button
                    className={period === 'thisYear' ? 'selected' : ''}
                    onClick={() => setPeriod('thisYear')}
                >
                    This year
                </button>
            </div>
        </header>
    );
};

export default Header;

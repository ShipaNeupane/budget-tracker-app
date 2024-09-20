import React from 'react';
import './Balance.scss';

const Balance = () => {
    return (
        <section className="balance">

        <div className="data-item">
            <p>Balance</p>
            <h2>$5,502.45</h2>
            <span className='data-item__positive' >+12.5%</span>
        </div>

        <div className="data-item">
            <p>Incomes</p>
            <h2>$9,450.00</h2>
            <span className='data-item__positive'>+27%</span>
        </div>

        <div className="data-item">
            <p>Expenses</p>
            <h2>$3,945.55</h2>
            <span className='data-item__negative'>-15%</span>
        </div>

        </section>
    );
};

export default Balance;

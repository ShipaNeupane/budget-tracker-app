import React, { useEffect, useState } from 'react';
import { getTransactions } from '../api.js';
import NavigationBar from './NavBar/NavBar.jsx';
import Header from './Header/Header.jsx';
import Balance from './Balance/Balance.jsx';

const Home = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions().then((res) => {
        setTransactions(res.data);
        });
    }, []);

    return (
        <div>
            <NavigationBar />
            <Header />
            <Balance />
        <h2>Transactions</h2>
        <ul>
            {transactions.map((transaction) => (
            <li key={transaction.id}>
                {transaction.amount} - {transaction.category} - {transaction.date}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Home;

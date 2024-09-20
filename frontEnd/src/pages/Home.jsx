import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar.jsx';
import Header from '../components/Header/Header.jsx';
import Balance from '../components/Balance/Balance.jsx';
import ActionSection from '../components/ActionSection/ActionSection.jsx';
import TransactionList from '../components/TransactionList/TransactionList.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { getTransactions } from '../api.js';

const Home = ({ transactions: initialTransactions }) => {
    const [transactions, setTransactions] = useState(initialTransactions || []);
    // Fetch transactions from the API on component mount
    useEffect(() => {
        getTransactions()
        .then((response) => {
            setTransactions(response.data);
        })
        .catch((error) => {
            console.error('Error fetching transactions:', error);
        });
    }, []); // Empty dependency array ensures this only runs once when the component mounts

    return (
        <div>
            <NavBar />
            <Header />
            <Balance />
            <ActionSection />
            <TransactionList transactions={transactions} />
            <Footer />
        </div>
    );
};

export default Home;

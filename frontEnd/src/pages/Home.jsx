import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar.jsx';
import Header from '../components/Header/Header.jsx';
import Balance from '../components/Balance/Balance.jsx';
import ActionSection from '../components/ActionSection/ActionSection.jsx';
import TransactionList from '../components/TransactionList/TransactionList.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { getTransactions } from '../api.js';

const Home = () => {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [period, setPeriod] = useState('thisMonth');

      // Default transactions for last month
    const defaultLastMonthTransactions = [
        { amount: 4000.00, category: 'Salary', date: '2024-08-01', type: 'Inflow' },
        { amount: 4000.00, category: 'Salary', date: '2024-08-15', type: 'Inflow' },
        { amount: 1500.00, category: 'Mortgage payment', date: '2024-08-05', type: 'Outflow' },
        { amount: 100.00, category: 'Hydro bill', date: '2024-08-10', type: 'Outflow' },
        { amount: 75.00, category: 'Phone bill', date: '2024-08-11', type: 'Outflow' },
        { amount: 65.00, category: 'Internet bill', date: '2024-08-12', type: 'Outflow' },
        { amount: 400.00, category: 'Groceries', date: '2024-08-20', type: 'Outflow' },
        { amount: 150.00, category: 'Car expenses (fuel)', date: '2024-08-17', type: 'Outflow' },
        { amount: 200.00, category: 'Car maintenance', date: '2024-08-25', type: 'Outflow' },
        { amount: 100.00, category: 'Entertainment', date: '2024-08-22', type: 'Outflow' },
        { amount: 500.00, category: 'Tax refund', date: '2024-08-27', type: 'Inflow' },
    ];

    // Fetch transactions from the API on component mount
    useEffect(() => {
        // Assuming getTransactions fetches current month transactions, let's combine it with last month defaults
        getTransactions()
        .then((response) => {
            const allTransactions = [...response.data, ...defaultLastMonthTransactions]; // Merge both
            // Sort by date in descending order (latest first)
            const sortedTransactions = allTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
            setTransactions(sortedTransactions);
        })
        .catch((error) => {
            console.error('Error fetching transactions:', error);
            // Add the default last month transactions even if there’s an error with the API
            setTransactions(defaultLastMonthTransactions.sort((a, b) => new Date(b.date) - new Date(a.date)));
        });
    }, []); 

    useEffect(() => {
    filterTransactions();
    }, [transactions, period]); // Refetch or filter transactions when transactions or period change

    // Helper function to get the start of the current month
    const getStartOfMonth = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
    };

    // Helper function to get the start of last month
    const getStartOfLastMonth = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
    };

    // Helper function to get the start of this year
    const getStartOfYear = () => {
    const date = new Date();
    return new Date(date.getFullYear(), 0, 1);
    };

    // Filter transactions based on the selected period
    const filterTransactions = () => {
    const now = new Date();
    let filtered;

    if (period === 'thisMonth') {
        filtered = transactions.filter((transaction) => new Date(transaction.date) >= getStartOfMonth());
    } else if (period === 'lastMonth') {
        filtered = transactions.filter(
        (transaction) =>
            new Date(transaction.date) >= getStartOfLastMonth() &&
            new Date(transaction.date) < getStartOfMonth()
        );
    } else if (period === 'thisYear') {
        filtered = transactions.filter((transaction) => new Date(transaction.date) >= getStartOfYear());
    }

    setFilteredTransactions(filtered);
    };

    return (
    <div>
        <NavBar />
        <Header period={period} setPeriod={setPeriod} />
        <Balance transactions={filteredTransactions} />
        <ActionSection />
        <TransactionList transactions={filteredTransactions} />
        <Footer />
    </div>
    );
};

export default Home;
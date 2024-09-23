import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar.jsx';
import Header from '../components/Header/Header.jsx';
import Balance from '../components/Balance/Balance.jsx';
import ActionSection from '../components/ActionSection/ActionSection.jsx';
import DonutChart from '../components/DonutChart/DonutChart'; // Import the new DonutChart component
import TransactionList from '../components/TransactionList/TransactionList.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { getTransactions, deleteTransaction  } from '../api.js';
import { useNavigate } from 'react-router-dom';
import './Home.scss'

const Home = () => {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [period, setPeriod] = useState('thisMonth');
    const [transactionToEdit, setTransactionToEdit] = useState(null); // Store the transaction to be edited
    const navigate = useNavigate(); // Use React Router's navigation

    const defaultLastMonthTransactions = [
        { id: 1, amount: 4000.00, category: 'Salary', date: '2024-08-01', type: 'Inflow' },
        { id: 2, amount: 4000.00, category: 'Salary', date: '2024-08-15', type: 'Inflow' },
        { id: 3, amount: 1500.00, category: 'Mortgage payment', date: '2024-08-05', type: 'Outflow' },
        { id: 4, amount: 100.00, category: 'Hydro bill', date: '2024-08-10', type: 'Outflow' },
        { id: 5, amount: 75.00, category: 'Phone bill', date: '2024-08-11', type: 'Outflow' },
        { id: 6, amount: 65.00, category: 'Internet bill', date: '2024-08-12', type: 'Outflow' },
        { id: 7, amount: 400.00, category: 'Groceries', date: '2024-08-20', type: 'Outflow' },
        { id: 8, amount: 150.00, category: 'Car expenses (fuel)', date: '2024-08-17', type: 'Outflow' },
        { id: 9, amount: 200.00, category: 'Car maintenance', date: '2024-08-25', type: 'Outflow' },
        { id: 10, amount: 100.00, category: 'Entertainment', date: '2024-08-22', type: 'Outflow' },
        { id: 11, amount: 500.00, category: 'Tax refund', date: '2024-08-27', type: 'Inflow' },
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

    const handleEditTransaction = (transaction) => {
        setTransactionToEdit(transaction); // Store the selected transaction to edit
        navigate('/edit-transaction', { state: { transactionToEdit: transaction } });
    };
    

    const handleDeleteTransaction = (transactionId) => {
        if (!transactionId) {
            console.error('No transaction ID provided for deletion');
            return;
        }
    
        deleteTransaction(transactionId)
            .then(() => {
                const updatedTransactions = transactions.filter((t) => t.id !== transactionId);
                setTransactions(updatedTransactions); // Update the state after deletion
            })
            .catch((error) => {
                console.error('Error deleting transaction:', error);
            });
    };
    

    return (
    <div>
        <NavBar />
        <Header period={period} setPeriod={setPeriod} />
        <Balance transactions={filteredTransactions} />
        <ActionSection />

        <div className='home'>
            <DonutChart className='chart-container' transactions={filteredTransactions} />
            <TransactionList className='transactions'
                transactions={filteredTransactions} 
                onEditTransaction={handleEditTransaction} 
                onDeleteTransaction={handleDeleteTransaction}
            />
        </div>

        <Footer />
    </div>
    );
};

export default Home;
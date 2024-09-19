import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api',
});

// Add a transaction
export const addTransaction = (transactionData) => {
    return API.post('/transactions', transactionData);
};

// Get all transactions
export const getTransactions = () => {
    return API.get('/transactions');
};

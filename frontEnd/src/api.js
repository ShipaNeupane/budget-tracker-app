import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api',
});

// Add a transaction
export const addTransaction = (transactionData) => {
    return API.post('/transactions', transactionData);
};

// Update a transaction by its ID
export const updateTransaction = (id, transactionData) => {
    return API.put(`/transactions/${id}`, transactionData);
};

// Delete a transaction
export const deleteTransaction = (id) => {
    return API.delete(`/transactions/${id}`);
};

// Get all transactions
export const getTransactions = () => {
    return API.get('/transactions');
};

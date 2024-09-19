import React, { useState } from 'react';
import { addTransaction } from '../api.js';

const AddTransaction = () => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const transactionData = { amount, date, category, type };
        addTransaction(transactionData).then(() => {
        alert('Transaction added!');
        }).catch((err) => {
        console.error(err);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
        <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        />
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="inflow">Inflow</option>
            <option value="outflow">Outflow</option>
        </select>
        <button type="submit">Add Transaction</button>
        </form>
    );
};

export default AddTransaction;

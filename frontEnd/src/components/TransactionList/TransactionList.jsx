import React from 'react';
import './TransactionList.scss';

const TransactionList = () => {
    const transactions = [
        { amount: '+ $5000.00' , category: 'Income', date: '2024/04/01', type: 'Inflow' },
        { amount: '- $19.99' , category: 'Subscription', date: '2024/03/29', type: 'Outflow'},
        // Add more transaction objects here
    ];

    return (
        <section className="transactions">
        <h3>Latest Transactions</h3>
        <table>
            <thead>
            <tr>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
            {transactions.map((transaction, index) => (
                <tr key={index}>
                <td>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.date}</td>
                <td>{transaction.type}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </section>
    );
};

export default TransactionList;

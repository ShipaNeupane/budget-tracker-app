import React from 'react';
import './TransactionList.scss';

const TransactionList  = ({ transactions }) => {

    const formatAmount = (amount, type) => {
        const formattedAmount = parseFloat(amount).toFixed(2); // Ensures 2 decimal places
        return type === 'Inflow' ? `+ $${formattedAmount}` : `- $${formattedAmount}`;
    };

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
                    <td className={transaction.type === 'Inflow' ? 'inflow' : 'outflow'}>
                        {formatAmount(transaction.amount, transaction.type)}
                    </td>
                    <td>{transaction.category || 'N/A'}</td>
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

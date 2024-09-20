import React from 'react';
import './TransactionList.scss';

const TransactionList  = ({ transactions }) => {
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
                        {transaction.amount}
                    </td>
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

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import TransactionPage from './pages/Transaction';

const App = () => {

  const [transactions, setTransactions] = useState([
    { amount: '5000', category: 'Income', date: '2024/04/01', type: 'Inflow' },
    { amount: '19.99', category: 'Subscription', date: '2024/03/29', type: 'Outflow' },
    // Additional initial transactions...
  ]);

  // Function to add a new transaction
  const addNewTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]); // Add new transaction at the top
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage transactions={transactions} />} />
          <Route path="/transaction" element={<TransactionPage addTransaction={addNewTransaction} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

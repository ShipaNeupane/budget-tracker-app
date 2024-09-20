import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AddTransaction from './components/AddTransaction/AddTransaction';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction" element={<AddTransaction />} />
      </Routes>
    </Router>
  );
};

export default App;

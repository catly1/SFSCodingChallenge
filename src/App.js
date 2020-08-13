import React from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchBanks } from './util/bank_api'
import Home from './components/home'

const App = (props) => {
  return (
    <div>
      <Home/>
    </div>
  )
};

export default App;

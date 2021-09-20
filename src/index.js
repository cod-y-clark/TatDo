import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { TatDo } from './components/TatDo';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TatDo />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

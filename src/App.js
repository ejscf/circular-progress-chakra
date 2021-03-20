import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes/routes';
import Global from './styles/global';

function App () {
  return (
    <Router>
      <Routes />

      <Global />
    </Router>
  )
}

export default App

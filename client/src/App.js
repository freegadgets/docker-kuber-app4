import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import OtherPage from './OtherPage'
import Fib from './Fib'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/other-page">Other Page</Link>
        <p></p>
      </div>
      <div>
        <Route exact path="/" component={Fib} />
        <Route path="/other-page" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;

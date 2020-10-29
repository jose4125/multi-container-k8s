import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">home</Link>
          <Link to="/otherpage">other page</Link>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div>
          <Switch>
            <Route exact path="/">
              <Fib />
            </Route>
            <Route exact path="/otherpage">
              <OtherPage />
            </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

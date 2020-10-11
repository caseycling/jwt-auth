import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Route exact path='/' render={(props) => <HomePage {...props} />} />
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/signup'>
            <SignUpPage />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;

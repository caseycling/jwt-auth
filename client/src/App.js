import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Route exact path='/' render={(props) => <Home {...props} />} />
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Registration />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;

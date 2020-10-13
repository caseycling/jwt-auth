import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Post from './pages/Post';

import './App.css';

class App extends React.Component {
  state = {
    email: '',
    password: '',
    loggedIn: false,
    token: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  logIn = async () => {
    try {
      const response = await Axios.post(
        'http://localhost:3000/api/user/login',
        {
          email: this.state.email,
          password: this.state.password,
        }
      );
      this.setState({
        loggedIn: true,
        token: response.data,
      });
      console.log(this.state);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  render() {
    return (
      <div className='App'>
        <Router>
          <NavBar loggedIn={this.state.loggedIn} />
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login
              handleChange={this.handleChange}
              loggedIn={this.state.loggedIn}
              logIn={this.logIn}
            />
          </Route>
          <Route path='/register'>
            <Registration />
          </Route>
          <Route path='/post'>
            <Post />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;

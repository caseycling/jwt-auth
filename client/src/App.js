import React from 'react';
import { Redirect } from 'react-router';

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
    posts: [],
    title: '',
    description: '',
    postSubmitted: false,
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
      console.log(err.response);
    }
  };

  submitPost = async () => {
    try {
      const post = await Axios.post('http://localhost:3000/api/posts/post', {
        email: this.state.email,
        title: this.state.title,
        description: this.state.description,
      });
      this.setState({ postSubmitted: true });
      console.log(post);
    } catch (err) {
      console.log(err);
    }
  };

  renderRedirect = () => {
    if (this.state.postSubmitted) {
      this.setState({ postSubmitted: false });
      return <Redirect to={'/'} />;
    }
  };

  render() {
    return (
      <div className='App'>
        <Router>
          {this.renderRedirect()}
          <NavBar loggedIn={this.state.loggedIn} />
          <Route exact path='/'>
            <Home loggedIn={this.state.loggedIn} />
          </Route>
          <Route path='/login'>
            <Login
              handleChange={this.handleChange}
              logIn={this.logIn}
              loggedIn={this.state.loggedIn}
            />
          </Route>
          <Route path='/register'>
            <Registration />
          </Route>
          <Route path='/post'>
            <Post
              handleChange={this.handleChange}
              submitPost={this.submitPost}
              loggedIn={this.state.loggedIn}
            />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;

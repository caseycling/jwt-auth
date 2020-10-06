import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    loggedIn: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //AXIOS CALL TO api/user/login ROUTE
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
        email: '',
        password: '',
        loggedIn: true,
      });
      console.log(response);
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return this.state.loggedIn ? (
      <Redirect to='/' />
    ) : (
      <div className='login-cont'>
        <h1>Log In</h1>
        <label> Email adress</label>
        <br />
        <input
          type='text'
          id='email'
          name='email'
          placeholder='John@email.com'
          onChange={this.handleChange}
        />
        <br />
        <label> Password</label>
        <br />
        <input
          type='text'
          id='password'
          name='password'
          placeholder='Password'
          onChange={this.handleChange}
        />
        <br />
        <input type='submit' onClick={this.logIn} />
      </div>
    );
  }
}

export default LoginForm;

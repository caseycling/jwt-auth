import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';

class LoginForm extends React.Component {
  //STORE INPUTED EMAIL AND PASSWORD
  state = {
    email: '',
    password: '',
    loggedIn: false,
  };

  handleChange = (event) => {
    //SET STATE TO EMAIL AND PASSWORD INPUT VALUE
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  signUp = async () => {
    //AXIOS CALL TO api/user/login ROUTE
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
        <input type='submit' onClick={this.signUp} />
      </div>
    );
  }
}

export default LoginForm;

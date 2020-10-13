import React from 'react';
// import Axios from 'axios';
import { Redirect } from 'react-router';

function LoginForm() {
  return this.props.loggedIn ? (
    <Redirect to={'/'} />
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
        onChange={this.props.handleChange}
      />
      <br />
      <label> Password</label>
      <br />
      <input
        type='text'
        id='password'
        name='password'
        placeholder='Password'
        onChange={this.props.handleChange}
      />
      <br />
      <input type='submit' onClick={this.props.logIn} />
    </div>
  );
}

export default LoginForm;

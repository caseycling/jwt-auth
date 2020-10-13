import React from 'react';
import { Redirect } from 'react-router';

function LoginForm(props) {
  const loggedIn = props.loggedIn;
  return loggedIn ? (
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
        onChange={props.handleChange}
      />
      <br />
      <label> Password</label>
      <br />
      <input
        type='text'
        id='password'
        name='password'
        placeholder='Password'
        onChange={props.handleChange}
      />
      <br />
      <input type='submit' onClick={props.logIn} />
    </div>
  );
}

export default LoginForm;

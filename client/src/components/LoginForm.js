import React from 'react';

function LoginForm() {
  return (
    <div className='login-cont'>
      <h1>Log In</h1>
      <label> Email adress</label>
      <br />
      <input type='text' id='fname' name='fname' value='John' />
      <br />
      <label> Password</label>
      <br />
      <input type='text' id='fname' name='fname' value='John' />
      <br />
      <input type='submit' value='Submit' />
    </div>
  );
}

export default LoginForm;

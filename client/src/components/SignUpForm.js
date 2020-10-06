import React from 'react';

function SignUpForm() {
  return (
    <div>
      <h1>Sign Up</h1>
      <label> Name</label>
      <br />
      <input type='text' id='name' name='name' placeholder='John Doe' />
      <br />
      <label> Email</label>
      <br />
      <input
        type='text'
        id='email'
        name='email'
        placeholder='johndoe@email.com'
      />
      <br />
      <label> Password</label>
      <br />
      <input
        type='text'
        id='password'
        name='password'
        placeholder='Enter password...'
      />
      <br />
      <input type='submit' />
    </div>
  );
}

export default SignUpForm;

import React from 'react';

function SignUpForm() {
  return (
    <div>
      <h1>Sign Up</h1>
      <label> Name</label>
      <br />
      <input type='text' id='name' name='name' value='John Doe' />
      <br />
      <label> Email</label>
      <br />
      <input type='text' id='email' name='email' value='johndoe@email.com' />
      <br />
      <label> Password</label>
      <br />
      <input type='text' id='email' name='email' value='Enter password...' />
      <br />
      <input type='submit' value='Submit' />
    </div>
  );
}

export default SignUpForm;

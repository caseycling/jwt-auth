import React from 'react';
import LoginForm from '../components/LoginForm';

function login(props) {
  const loggedIn = props.loggedIn;
  const handleChange = props.handleChange;
  const logIn = props.logIn;

  return (
    <div>
      <LoginForm
        loggedIn={loggedIn}
        handleChange={handleChange}
        logIn={logIn}
      />
    </div>
  );
}

export default login;

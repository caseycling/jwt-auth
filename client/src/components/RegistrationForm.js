import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';

class SignUpForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //AXIOS CALL TO api/user/register ROUTE
  register = async () => {
    try {
      const response = await Axios.post(
        'http://localhost:3000/api/user/register',
        {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        }
      );
      this.setState({
        name: '',
        email: '',
        password: '',
        loggedIn: true,
        token: response.data.token,
      });
    } catch (err) {
      console.log(err.response);
    }
  };

  render() {
    return this.state.loggedIn ? (
      <Redirect to={{ pathname: '/', state: { token: this.state.token } }} />
    ) : (
      <div>
        <h1>Sign Up</h1>
        <label> Name</label>
        <br />
        <input
          type='text'
          id='name'
          name='name'
          placeholder='John Doe'
          onChange={this.handleChange}
        />
        <br />
        <label> Email</label>
        <br />
        <input
          type='text'
          id='email'
          name='email'
          placeholder='johndoe@email.com'
          onChange={this.handleChange}
        />
        <br />
        <label> Password</label>
        <br />
        <input
          type='text'
          id='password'
          name='password'
          placeholder='Enter password...'
          onChange={this.handleChange}
        />
        <br />
        <input type='submit' onClick={this.register} />
      </div>
    );
  }
}

export default SignUpForm;

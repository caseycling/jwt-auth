import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Axios from 'axios';

export default class HomePage extends Component {
  state = {
    posts: [],
    token: '',
  };

  //Display posts when homepage renders
  componentDidMount() {
    //If token exists, run lifecycle event
    if (this.state.token) {
      this.setState({ token: this.props.location.state.token });
      Axios.get('http://localhost:3000/api/posts/all')
        .then((req) => {
          this.setState({ posts: req.data });
        })
        .catch((err) => {
          console.log(err.message);
          throw err;
        });
      console.log(this.state);
    }
  }

  render() {
    //Redirect to login page if no token
    return !this.state.token ? (
      <Redirect to='/login' />
    ) : (
      <div>
        <h1>Home Page</h1>
        {this.state.posts.map((post) => (
          <div
            key={post._id}
            style={{ border: '1px solid black', marginBottom: '2rem' }}
          >
            <h2>{post.title}</h2>
            <p>By: {post.email}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

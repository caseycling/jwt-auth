import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Axios from 'axios';

export default class HomePage extends Component {
  state = {
    posts: [],
    token: '',
    id: '',
  };

  //Get user token
  getUser() {
    const token = this.props.location.state.token;
    if (token) {
      this.setState({ token: token });
      Axios.get('http://localhost:3000/api/posts', {
        headers: {
          'auth-token': token,
        },
      })
        .then((res) => {
          this.setState({ id: res.data._id });
          this.getPosts(res.data._id);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    }
  }

  //Get specific posts
  getPosts(id) {
    Axios.get(`http://localhost:3000/api/posts/all/${id}`)
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        console.log(err.message);
        throw err;
      });
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    //Redirect to login page if no token
    // console.log(this.state.posts);
    return (
      <div>
        <h1>Home Page</h1>
        {/* {this.state.posts.map((post) => (
          <div
            key={post._id}
            style={{ border: '1px solid black', marginBottom: '2rem' }}
          >
            <h2>{post.title}</h2>
            <p>By: {post.email}</p>
            <p>{post.description}</p>
          </div>
        ))} */}
      </div>
    );
  }
}

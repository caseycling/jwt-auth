import React, { Component } from 'react';
import Axios from 'axios';

export default class HomePage extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    Axios.get('http://localhost:3000/api/posts/all')
      .then((req) => {
        this.setState({ posts: req.data });
        console.log(this.state.posts);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>

        {this.state.posts.map((post) => (
          <div style={{ border: '1px solid black', marginBottom: '2rem' }}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

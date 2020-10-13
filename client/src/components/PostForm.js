import React, { Component } from 'react';
import { Redirect } from 'react-router';

function PostForm(props) {
  const loggedIn = props.loggedIn;
  return !loggedIn ? (
    <Redirect to={'/'} />
  ) : (
    <div className='post-cont'>
      <h1>Make a post</h1>
      <br />
      <input
        type='text'
        id='post-title'
        name='title'
        placeholder='Title'
        onChange={props.handleChange}
      />
      <br />
      <br />
      <input
        type='textarea'
        id='post-description'
        name='description'
        placeholder='Subject'
        onChange={props.handleChange}
        rows='7'
      />
      <br />
      <br />
      <input type='submit' onClick={props.submitPost} />
    </div>
  );
}

export default PostForm;

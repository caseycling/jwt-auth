import React from 'react';
import PostForm from '../components/PostForm';

function Post(props) {
  return (
    <div>
      <PostForm
        handleChange={props.handleChange}
        submitPost={props.submitPost}
        postSubmitted={props.postSubmitted}
      />
    </div>
  );
}

export default Post;

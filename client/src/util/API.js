import Axios from 'axios';

export default {
  //Get all posts
  getPosts: function () {
    Axios.get('http://localhost:3000/api/posts/all');
  },
};

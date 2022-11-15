import axios from 'axios'

class PostAPI {
  static async getAll(limit, page)  {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
   const totalPosts = response.headers["x-total-count"];
   const posts = await response.data;
   return [posts, totalPosts];
  }
  static async getOne(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();
    return [post];
  }
  static async getComment(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments/`
    );
    const comment = await response.json();
    return [comment]
  }
  static delPost() {

  }
}

export default PostAPI;
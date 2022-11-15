import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonDel from './UI/ButtonDel/ButtonDel';

const PostsList = (props) => {
  const navigate = useNavigate();
  if (props.error) {
    return <h1>error</h1>
  } else {
    return (
      <ol className="post__items">
        {props.posts.map(post => <li onClick={() => navigate(`/post/${post.id}`)} key={post.title} className="post__item">
          <span className="post__item-num">{post.id}</span>
          <p className="post__item-text">{post.title}</p>
          <ButtonDel title={post.title} posts={props.posts} postsNew={props.setPosts}/>
        </li>)}
      </ol>
    ) 
  }
}

export default PostsList;
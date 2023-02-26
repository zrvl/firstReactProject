import React from "react";
import style from "./ButtonDel.module.css";

const ButtonDel = (props) => {
  const deletePost = (e, title) => {
    const delPosts = props.posts.filter((post) => post.title !== title);
    props.postsNew(delPosts);
    e.stopPropagation();
  };
  return (
    <button
      className={style.post__delete}
      onClick={(e) => deletePost(e, props.title)}
    >
      Delete
    </button>
  );
};

export default ButtonDel;

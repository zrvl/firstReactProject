import React from "react";
import { useState } from "react";
import { usePushing } from "../hooks/usePushing";

const AddPost = (props) => {
  const [addText, setAddText] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const pushingPost = usePushing(
    addText,
    setIsInputEmpty,
    setAddText,
    props.posts,
    props.setPosts,
    props.setActiveBtn
  );

  return (
    <div className="menu-add">
      <input
        className="menu-add__input"
        type="text"
        value={addText}
        onChange={(e) => setAddText(e.target.value)}
        placeholder="title"
      />
      <button className="menu-add__button" onClick={pushingPost}>
        ОК
      </button>
      <p className={isInputEmpty ? "parRed" : "parBlack"}>Enter post title</p>
    </div>
  );
};

export default AddPost;

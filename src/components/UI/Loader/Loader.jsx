import React from "react";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.loader}>
      <span className={style.loader__text}>Loading</span>
      <div className={style.loader__circle}></div>
    </div>
  );
};

export default Loader;

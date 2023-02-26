import React from "react";

const Menu = (props) => {
  return (
    <div className="menu">
      <input
        className="menu__input"
        value={props.value}
        onChange={(e) => props.setSeacrhText(e.target.value)}
        placeholder="Search"
      />
      <button
        className="menu__sort"
        onClick={(e) =>
          props.activeSort
            ? props.setActiveSort(false)
            : props.setActiveSort(true)
        }
      >
        Sort
      </button>
    </div>
  );
};

export default Menu;

import React from 'react'

const Menu = (props) => {
  return (
    <div className="menu">
      <input className="menu__input"  value={props.value} onChange={(e) => props.setSeacrhText(e.target.value)} placeholder='Поиск' />
      <button className="menu__sort" onClick={(e) => props.activeSort ? props.setActiveSort(false) : props.setActiveSort(true)}>Сортик</button>
    </div>
  )
}

export default Menu;
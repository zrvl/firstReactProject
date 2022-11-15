import React from 'react'
import style from './Popup.module.css'

const Popup = ({setActiveBtn,activeBtn,children}) => {
  return (
    <div onClick={() => setActiveBtn(false)} className={activeBtn ? `${style.popup} ${style.active}` : style.popup}>
      <div className={style.content} onClick={(e)=>e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Popup
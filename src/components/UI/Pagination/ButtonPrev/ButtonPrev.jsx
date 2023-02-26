import React from 'react'
import prev from '../../../../images/prev-arrow.svg'
import style from '../arrow.module.css'


function ButtonPrev(props) {
  const editPrev = () => {
    if (props.offset !== 0) {
      props.setOffset(props.offset - 1);
    }
    else {
      return props.offset;
    }
  }
  return (
    <button className={style.arrow__btn} onClick={editPrev}>
      <img className={style.arrow__img} src={prev} alt="arrow-prev" />
    </button>
  )
}

export default ButtonPrev
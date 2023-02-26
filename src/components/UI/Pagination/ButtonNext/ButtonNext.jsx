import React from 'react'
import next from '../../../../images/next-arrow.svg'
import style from '../arrow.module.css'


function ButtonNext(props) {
  const editNext = () => {
    const lastPage = props.posts / props.limit;
    if (lastPage !== props.page.slice(-1)[0]) {
      props.setOffset(props.offset + 1);
    } else {
      props.setOffset(props.offset)
    }
  }
  return (
    <button className={style.arrow__btn} onClick={editNext}>
      <img className={style.arrow__img} src={next} alt="arrow-next" />
    </button>
  )
}

export default ButtonNext
import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './ButtonBack.module.css'

const ButtonBack = () => {
  const navigate = useNavigate()
  return (
    <button className={style.back__btn} onClick={()=>navigate(-1)}>back</button>
  )
}

export default ButtonBack
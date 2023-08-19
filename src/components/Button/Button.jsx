import React from 'react'

const Button = ({styles , text , onClick}) => {
  return (
    <button className={styles}  onClick={onClick}>{text}</button>
  )
}

export default Button
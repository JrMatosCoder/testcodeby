import React from 'react'
import styles from './card.module.css';

const Card = ({image,title,price,sellingPrice}) => {
  return (
    <div className={styles.card}>
        <img src={image} alt={title}/>
        <div className={styles.more}>
            <h2>{title}</h2>
            <span>R$ {price}</span>
            <p>R$ {sellingPrice}</p>
        </div>
    </div>
  )
}

export default Card
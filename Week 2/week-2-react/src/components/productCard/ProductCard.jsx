import React from 'react'
import './ProductCard.css'


export const ProductCard = ({ name, price, image}) => {
  return (
    <div 
        className='card' 
        style={{backgroundImage: `url(${image})`}}
    >
        <h3>{name}</h3>
        <p>{price}</p>
    </div>
  )
}

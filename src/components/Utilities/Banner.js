import React from 'react'

export default function Banner({ name, price, description, img }) {
  return (
    <div className="banner">
      <h1>{name}</h1>
      <div></div>
      <img src={img} alt="Item Icon" />
      <p>{price} GP</p>
      {description}
    </div>
  )
}

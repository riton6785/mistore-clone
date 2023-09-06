import React from 'react'
import "../Styles/productreviewcard.css"

const Productreviewcard = ({image,index,price,name,review}) => {
  return (
   <div className="productreviewcard">
    <img src={image} alt={`${index} review`} />
    <h5>{review}</h5>
    <span>{name}</span>
    <b>{price}</b>
   </div>
  )
}

export default Productreviewcard
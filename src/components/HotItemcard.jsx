import React from 'react'
import "../Styles/hotitemcard.css"

const HotItemcard = ({image,index,name,price}) => {
  return (
    <div className="hotitemcard">
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemcard
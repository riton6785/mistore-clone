import React from 'react'
import Productreviewcard from './Productreviewcard'
import "../Styles/productReviews.css"

const Productreviews = ({productReviews}) => {
  return (
    <div className="productreviews">
      {
        productReviews.map((item,index)=>(
          <Productreviewcard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image}/>
        ))
      }
    </div>
  )
}

export default Productreviews
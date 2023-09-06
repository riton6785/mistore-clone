import React from 'react'
import "../Styles/videocard.css"
const palybutton= <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M16 37.85v-28l22 14Zm3-14Zm0 8.55 13.45-8.55L19 15.3Z"/></svg>


const Videocard = ({image,name,index}) => {
  return (
   <div className="videoCard" style={{backgroundImage:`url(${image})`}}>
    <a href="#/">{palybutton}</a>
    <p>{name}</p>

   </div>
  )
}

export default Videocard
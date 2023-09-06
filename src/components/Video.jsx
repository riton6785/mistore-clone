import React from 'react'
import Videocard from './Videocard'
import "../video.css"

const Video = ({videos}) => {
  return (
    <div className="videos">
    {
        videos.map((item,index)=>(
           <Videocard  index={index} key={item.image} image={item.image} name={item.name}/>
        ))
    }
</div>
  )
}

export default Video
import React from 'react'
import HotItemcard from './HotItemcard'
import "../Styles/hotaccessories.css"

const Hotaccessories = ({music , musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccesories,mobileAccesoriesCover}) => {
  return (
    <div className="HotAccessories">
        <div>
            <img src={musicCover||smartDeviceCover||homeCover||lifeStyleCover||mobileAccesoriesCover} alt="Cover" />
        </div>

        {/* ------------------2nd */}
        <div>
            {
               music && music.map((item,index)=>(
                    <HotItemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} /> 

                ))
            }
            {
                smartDevice && smartDevice.map((item,index)=>(
                    <HotItemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

                ))
            }
            {
                home && home.map((item,index)=>(
                    <HotItemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

                ))
            }
            {
                lifeStyle && lifeStyle.map((item,index)=>(
                    <HotItemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

                ))
            }
            {
                mobileAccesories && mobileAccesories.map((item,index)=>(
                    <HotItemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

                ))
            }
            
        </div>
    </div>
  )
}

export default Hotaccessories
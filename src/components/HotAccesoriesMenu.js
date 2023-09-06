import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/hotaccesoriesmenu.css"
const HotAccesoriesMenu = () => {
  return (
    <div className="HotAccesoriesMenu">
      <Link className='HotAccesoriesLink' to='/music'>Music Store</Link>  
      <Link className='HotAccesoriesLink' to='/smartDevice'>Smart Devices</Link>  
      <Link className='HotAccesoriesLink' to='/home'>Home</Link>  
      <Link className='HotAccesoriesLink' to='/lifestyle'>Life Style</Link>  
      <Link className='HotAccesoriesLink' to='/mobileAccesories'>Mobile Accesories</Link>  
    </div>
  )
}

export default HotAccesoriesMenu
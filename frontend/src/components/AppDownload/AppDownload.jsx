// import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='AppDownload' id='AppDownload'>
<h2>For Better Experience Download <br/>Mobile App</h2>
<div className="AppDownload-icons">
<img src={assets.play_store} alt="" />
<img src={assets.app_store} alt="" />
</div>
    </div>
  )
}

export default AppDownload
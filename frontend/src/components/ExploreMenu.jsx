// import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='ExploreMenu' id='ExploreMenu'>
        <h2>Explore our menu</h2>
            <p className="ExploreMenu-text">Discover a variety of dishes to suit every taste at BhooBites. From local favorites to international cuisines, our diverse menu offers something for everyone. Enjoy fresh, delicious meals delivered straight to your door. Explore our menu and satisfy your cravings today!
</p>
<div className="ExploreMenu-list">
{menu_list.map((item,index)=>{
    return(
        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} key={index} className="ExploreMenu-list-items">
<img className={category===item.menu_name?"active" :""} src={item.menu_image} alt="" />
<p>{item.menu_name}</p>
        </div>
    )
})}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
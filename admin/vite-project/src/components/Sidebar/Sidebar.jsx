// import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/admin_assets/assets'
import './Siderbar.css'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Order Items</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
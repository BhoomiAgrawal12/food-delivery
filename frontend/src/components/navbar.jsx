// import React from 'react'
import './navbar.css'
import { assets } from '../assets/frontend_assets/assets'
import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
;
import { StoreContext } from '../context/storeContext';
import {useNavigate} from 'react-router-dom'


const Navbar = ({setShowlogin}) => {

const [menu,setMenu]=useState("home");
const {getTotalCartAmount,token,setToken}=useContext(StoreContext);

const navigate=useNavigate();

const logout = ()=>{
localStorage.removeItem("token")
setToken("");
navigate("/")
}

  return (
    <div className="main-Nav">
    <div className='navbar'>
        <div className="navbar-left">
        <Link to={'/'}><img  src={assets.logo} alt='' className='logo'/></Link>
        </div>

<div className='navbar-center'>
    <ul>
        <Link to='/' onClick={()=>{setMenu("home")}}className={menu==="home"?'active':''}>Home</Link>
        <a href='#ExploreMenu'onClick={()=>{setMenu("menu")}}className={menu==="menu"?'active':''}>Menu</a>
        <a href='#AppDownload'onClick={()=>{setMenu("mobile-app")}}className={menu==="mobile-app"?'active':''}>mobile-app</a>
        <a href='#Footer'onClick={()=>{setMenu("Contact-us")}}className={menu==='Contact-us' ?'active':''}>Contact us</a>
    </ul>
</div>
<div className='navbar-right'>
<img className='search' src={assets.search_icon} />
<div className='basket'>
<Link to={'/cart'}><img src={assets.basket_icon} /></Link>
<div className={getTotalCartAmount()===0?"":"dot"}> </div>
</div>
{!token?<button className='button' onClick={()=>setShowlogin(true)}>sign in</button>
:
<div className="navbar-profile">
  <img src={assets.profile_icon} alt="" />
  <ul className="nav-profile-dropdown">
    <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
    <hr/>
    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
  </ul>
</div>
  }
</div>

    </div>
    </div>
  )
}

export default Navbar
// import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import PlaceOrder from './pages/placeOrder/placeOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPop from './components/loginPop/loginPop'
import Verify from './pages/verify/verify'
import MyOrder from './pages/myOrders/MyOrder'

const App = () => {
const [showlogin,setShowlogin]=useState(false)
  return (
    <>
    {showlogin?<LoginPop setShowlogin={setShowlogin}/>:<></>}
    <div className='app'>
      <Navbar setShowlogin={setShowlogin}/>
      <div className="app-baby">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
      <Route path='/verify' element={<Verify/>}/>
      <Route path='/myorders' element={<MyOrder/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
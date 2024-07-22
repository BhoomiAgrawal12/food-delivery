// import React from 'react'
import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext'
import './cart.css'
import { useNavigate } from 'react-router-dom';

const cart = () => {

  const { cartitems, food_list, removeFromCart ,getTotalCartAmount,url} = useContext(StoreContext);
const navigate=useNavigate();


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item" key={item._id}>
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} Rs</p>
                  <p>{cartitems[item._id]}</p>
                  <p>{item.price * cartitems[item._id]} Rs</p>
                  <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-detail">
          <h2>Cart Totals</h2>
          <div className="cart-total-detail">
            <p>Subbtotal</p>
            <p>{getTotalCartAmount()} Rs</p>
          </div>
          <hr />
          <div className="cart-total-detail">
            <p>Delivery fee</p>
            <p>{getTotalCartAmount()===0?0:30} Rs</p>
          </div>
          <hr />
          <div className="cart-total-detail">
            <b>Total</b>
            <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+30} Rs</b>
          </div>
          <hr />
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>



        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cart
// import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './placeOrder.css'
import { StoreContext } from '../../context/storeContext'
import axios from 'axios'

const PlaceOrder = () => {

const{getTotalCartAmount,token,food_list,cartitems,url}=useContext(StoreContext)

const[data,setData]=useState({
  firstName:"",
lastName:"",
email:"",
street:"",
city:"",
state:"",
pincode:"",
country:"",
phone:""
})


const onChangeHandler=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  setData(data=>({...data,[name]:value}))
}

const placeOrder=async(event)=>{
event.preventDefault();
let orderItems=[];
food_list.map((item)=>{
  if(cartitems[item._id]>0){
    let itemInfo=item;
    itemInfo["quantity"]=cartitems[item._id];
    orderItems.push(itemInfo);
  }
})

let orderData={
  address:data,
  items:orderItems,
  amount:getTotalCartAmount()+2,
}
console.log("Order Data: ", orderData); 
try{
let response =await axios.post(url+"/api/order/place",orderData,{headers:{token}})
if(response.data.success){
  const{session_url}=response.data;
  window.location.replace(session_url);
}
else{
  alert("Error" + response.data.message)
}
}catch(error){
  console.error("Error placing order: ", error);
      alert("Error placing order");
}
}

const navigate =useNavigate();

useEffect(()=>{
  if(!token){
navigate('/cart')
  }
  else if(getTotalCartAmount()===0)
    navigate('/cart')
},[token])
  return (
    <div>
      <form onSubmit={placeOrder} className="placeOrder">
        <div className="placeOrder-left">
<p className="title">Delivery Information</p>
<div className="multi-fields">
  <input required  name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First name'/>
  <input required  name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Last name'/>
</div>
<input required  name='email' onChange={onChangeHandler} value={data.email} type="text"  placeholder='Email address'/>
<input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
<div className="multi-fields">
  <input  required name='city' onChange={onChangeHandler} value={data.city} type='text' placeholder='City'/>
  <input required  name='state' onChange={onChangeHandler} value={data.state} type='text' placeholder='State'/>
</div>
<div className="multi-fields">
  <input required  name='pincode' onChange={onChangeHandler} value={data.pincode} type='text' placeholder='Pincode'/>
  <input required  name='country' onChange={onChangeHandler} value={data.country} type='text' placeholder='Country'/>
</div>
<input required  name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='phone' />
        </div>
        <div className="placeOrder-right">
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
          <button type='submit'>PROCEED TO PAYMENT</button>



        </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder;
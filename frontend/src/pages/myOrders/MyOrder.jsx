// import React from 'react'
import "./Myorder.css"
import axios from "axios"
import { useState, useContext, useEffect } from "react"
import { StoreContext } from "../../context/storeContext"
import { assets } from "../../assets/frontend_assets/assets"

const MyOrder = () => {

  const { url, token } = useContext(StoreContext)
  const [data, setData] = useState([])

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } })
    setData(response.data.data)
  }
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token])

  return (
    <div className='MyOrder'>
      <h1>My Orders</h1>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>{order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity
                }
                else {
                  return item.name + " x " + item.quantity + ","
                }
              })}</p>
              <p>{order.amount}.00 Rs</p>
              <p>Items:{order.items.length}</p>
              <p><span>&#x25cf;</span><b>{order.status}</b></p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrder
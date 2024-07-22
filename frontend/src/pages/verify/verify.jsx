// import React from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import "./verify.css";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/storeContext";
import axios from "axios"


const Verify = () => {

const[searchParams,setSearchParams]=useSearchParams();
const success=searchParams.get("success")
const orderId = searchParams.get("orderId")
const {url}=useContext(StoreContext);
const navigate=useNavigate();


const verifyPayment=async()=>{
    const response =await axios.post(url+"/api/order/verify",{success,orderId});
    if(response.data.success){
navigate("/myorders");
    }
    else{
        navigate("/")
    }
}
useEffect(()=>{
    verifyPayment();
},[])

  return (
    <div className='Verify'>
        <div className="spinner">

        </div>
    </div>
  )
}

export default Verify
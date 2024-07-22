//  import React from 'react'
import { useState } from 'react'
import './loginPop.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'
import axios from "axios";
 
 const LoginPop = ({setShowlogin}) => {

const{url,setToken}=useContext(StoreContext)


    const[currState,setCurrState]=useState("Login")

const [data,setData]=useState({
    name:"",
    email:"",
    password:""
})

const onChangeHandler=(event)=>{
    const name =event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
}

const onLogin=async(event)=>{
event.preventDefault()
let newUrl=url;
if(currState==="Login"){
    newUrl+="/api/user/login"
}
else{
    newUrl+="/api/user/register"
}

const response =await axios.post(newUrl,data);

if(response.data.success){
    setToken(response.data.token);
    localStorage.setItem("token",response.data.token);
    setShowlogin(false)
}
else{
    alert(response.data.message)
}
}

   return (
     <div className='LoginPop'>
<form onSubmit={onLogin} className="Login-Popup-container">
    <div className="Login-popup-title">
        <h2>{currState}</h2>
        <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
    </div>
    <div className="login-popup-inputs">
        {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Your name' required/>}
        <input  name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Your email' required/>
        <input  name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Password' required/>
    </div>
    <button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
    <div className="login-pop-condition">
        <input type="checkbox" required/>
        <p>By continuing, I agree to the terms of use & privacy policy.</p>
    </div>
    {currState==="Login"?
    <p>Create a new account?<span  onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
    :  
    <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>

}
</form>
     </div>
   )
 }
 
 export default LoginPop
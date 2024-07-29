// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Add from "./pages/add/add"
import List from "./pages/list/list"
import Order from "./pages/order/order"
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "https://food-delivery-3-1p9z.onrender.com";

  return (
    <div className='App'>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Order url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App

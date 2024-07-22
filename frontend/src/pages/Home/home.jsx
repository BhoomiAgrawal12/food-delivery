// import React from 'react'
import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu'
import Header from '../../components/Header'
import './home.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const home = () => {
    const[category,setCategory]=useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default home
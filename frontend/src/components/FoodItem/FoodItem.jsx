// import React from 'react'
import './FoodItem.css'
import { assets } from "../../assets/frontend_assets/assets"
import { useContext, useState } from 'react';
import { StoreContext } from '../../context/storeContext';


const FoodItem = ({ id, description, name, price, image }) => {
    // const [foodCount, setFoodcount] = useState(0);
    const{cartitems,addToCart,removeFromCart,url}=useContext(StoreContext)

    
    return (
        <div className="FoodItem">
            <div className="FoodItem-image-container">
                <img className="FoodItem-image" src={url+"/images/"+image}></img>
            
            {!cartitems[id]
                ?
                <img className='add' onClick={() => addToCart(id)}
                    src={assets.add_icon_white} />
        :
        <div className="fooditem-counter">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}/>
            <p>{cartitems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
        </div>
    
        }
        </div>
            <div className="FoodItem-info-full">
                <div className="FoodItem-name-rating">
                    <p>{name}</p>
                    <img className="FoodItem-rating" src={assets.rating_starts}></img>
                </div>
                <p className="FoodItem-description">{description}</p>
                <p className="FoodItem-price">{price} Rs</p>
            </div>
        </div>
    )
}

export default FoodItem
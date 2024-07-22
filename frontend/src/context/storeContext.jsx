import { createContext, useState } from "react";
// import { food_list } from "../assets/frontend_assets/assets";
import { useEffect } from "react";
import axios from "axios"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartitems, setCartitems] = useState({});
    const url ="http://localhost:4000" ;
    const[token,setToken]=useState("");
    const[food_list,setFoodlist]=useState([]);

    const addToCart =async(itemId) => {
        if (!cartitems[itemId]) {
            setCartitems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    const removeFromCart = async(itemId) => {
        setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartitems[item];
            }
        }
        return totalAmount;
    }

const fetchFoodlist=async()=>{
    const response =await axios.get(url+"/api/food/list");
setFoodlist(response.data.data)
}
const loadCartData=async(token)=>{
    const response=await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartitems(response.data.cartData);
}

useEffect(()=>{

async function loadData(){
    await fetchFoodlist();
    if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"))
    }
}
loadData();
},[])


    const ContextValue = {
        food_list,
        cartitems,
        setCartitems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
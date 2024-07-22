import userModel from "../models/userModel.js"


//add items to cart
const addToCart =async (req,res)=>{
try{
let userData=await userModel.findOne({_id:req.body.userId})
let cartData= await userData.cartData;
if(!cartData[req.body.itemId]){
    cartData[req.body.itemId]=1
}
else{
    cartData[req.body.itemId]+=1
}
await userModel.findByIdAndUpdate(req.body.userId,{cartData});
res.json({success:true,message:"Added to cart"});
}catch(error){
console.log(error);
res.json({success:false,message:"Error"});
}
}

//remove itmes from usercart 
const removefromcart =async(req,res)=>{
try{
let userData =await userModel.findById(req.body.userId)
let cartData= await userData.cartData;
if(cartData[req.body.itemId]>0){
    cartData[req.body.itemId]-=1
}
await userModel.findByIdAndUpdate(req.body.userId,{cartData});
res.json({success:true,message:"Removed from cart"});
}catch(error){
console.log(error);
res.json({success:false,message:"Error"});
}
}

//fetchuser cart data
const getCart=async(req,res)=>{
try {
    // Check if userId is provided
    if (!req.body.userId) {
        return res.status(400).json({ success: false, message: "User ID is required" });
      }
       // Find the user by ID
    let userData =await userModel.findById(req.body.userId)

     // Check if user is found
     if (!userData) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      // Get the cart data from the user
let cartData= await userData.cartData;

// Return the cart data
res.json({success:true,cartData});
} catch (error) {
    console.log(error);
res.json({success:false,message:"Error"});
}
}


export{addToCart,removefromcart,getCart}
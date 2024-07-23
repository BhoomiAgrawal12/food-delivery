import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
// import bcryptjs from "bcryptjs"
import validator from "validator"
import "dotenv/config"
import argon2 from 'argon2';

//login user

const loginUser = async(req,res)=>{
 const{email,password}=req.body;
 try{
    const user =await userModel.findOne({email});

    if(!user){
        return res.json({success:false,message:"User doesn't exist"})
    }

    const isMatch =await argon2.compare(password,user.password);

    if(!isMatch){
return res.json({success:false,message:"Invalid credentials"})
    }

    const token =createToken(user._id);
    res.json({success:true,token});
 }catch(error){
    console.log(error);
    res.json({success:false,message:"Error"})
 }
}

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser = async(req,res)=>{
const{name,password,email}=req.body;
try{
    const exists=await userModel.findOne({email})
    if(exists){
        return res.json({success:false,message:"User already exists"})
    }

    if(!validator.isEmail(email)){
        return res.json({success:false,message:"Please enter a valid email"})
    }

    if(password.length<8){
        return res.json({success:false,message:"Please enter a strong password"})
    }

    //hashing user pasword
    const salt =await argon2.genSalt(10)
    const hashedPassword =await argon2.hash(password,salt);

    const newUser = new userModel({
        name:name,
        email:email,
        password:hashedPassword
    })

    const user=await newUser.save()
    const token =createToken(user._id)
    res.json({success:true,token});
}catch(error){
console.log(error);
res.json({success:false,message:"Error"})
}
}

export{loginUser,registerUser}
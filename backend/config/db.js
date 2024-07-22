import mongoose from "mongoose";
mongoose.set('debug', true);

export const connectDB=async()=>{
    try{
    await mongoose.connect(process.env.MONGODB_URI).then(()=>
        console.log("Database connected")
    );
}catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
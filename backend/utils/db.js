import mongoose from "mongoose";
const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("db connected");
    } catch (error) {
        console.log("erroe",error);
    }
}

export default connectDB;
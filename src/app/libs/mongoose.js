import mongoose from "mongoose";

const connectDb = async()=>
   {
     try{
        await mongoose.connect(process.env.MONGODB_URI)
         console.log("Connected to MongoDB");
     }
    catch (error) {
        console.log("Error connecting to DB");
        
  
   }
}

export default connectDb;
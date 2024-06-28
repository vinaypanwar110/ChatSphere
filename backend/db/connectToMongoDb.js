import mongoose from "mongoose";
const connectToMongoDB =  async () => {
    const uri = process.env.MONGO_URL;
    try {
        await mongoose.connect(uri);
          console.log("Connected to MongoDB"); 
    } catch (error) {
        console.error("Error connecting to MongoDb",error.message);
    }
}

export default connectToMongoDB;
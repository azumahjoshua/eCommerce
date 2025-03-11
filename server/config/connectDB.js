import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



const MONGODB_URI = `mongodb://mongodb:27017/ecommerce`

if (!MONGODB_URI) {
  throw new Error("Please provide a valid MONGODB_URI in the .env file or environment variables.");
}

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with a failure code
  }
}

export default connectDB;

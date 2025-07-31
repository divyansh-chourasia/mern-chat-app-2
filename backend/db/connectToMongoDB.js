import mongoose, { connect } from "mongoose";

const connectToMongoDB = async () => {
  try {
    await connect(process.env.MONGO_DB_URI, );
    console.log("Connected to MongoDB successfully");
  } 
  catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
}

export default connectToMongoDB;
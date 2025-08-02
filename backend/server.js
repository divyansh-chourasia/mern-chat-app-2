import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5000;
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser ()) // Middleware to parse cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes)
 
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToMongoDB();
});

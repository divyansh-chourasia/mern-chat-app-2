import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("mernchatapp-jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    sameSite: "strict", // Helps prevent CSRF attacks
    secure: process.env.NODE_ENV !== "development" 

  });
};

export default generateTokenAndSetCookie;
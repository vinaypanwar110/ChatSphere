import jwt from "jsonwebtoken";
import User from "../models/user.js";
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "150d",
  });
  res.cookie("jwt", token, {
    maxAge: 150 * 24 * 60 * 60 * 1000, //millisec
    httpOnly: true, // prevent attacks
    sameSite: "strict", // csrf attack cross-site request frogery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};
export default generateTokenAndSetCookie;

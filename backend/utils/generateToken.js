import  jwt  from "jsonwebtoken";
import User from "../models/user";


const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECERT,{
        expiresIn:"150d",
    })
    res.cookie("jwt",token,{
         maxAge:150*24*60*60*1000,//millisec
         httpOnly:true,  // prevent attacks
         sameSite:"strict"
    })
}
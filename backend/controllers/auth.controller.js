import User from "../models/user.js";
import bcrpt from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmpassword, gender } = req.body;
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Wrong Password Try Again!" });
    }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username Already exists" });
    }

    // hashing password here

    const salt = await bcrpt.genSalt(10);
    const hashedPassword = await bcrpt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
        // GWT TOKEN  
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = (req, res) => {
  console.log("login");
  res.send("Login");
};

export const logout = (req, res) => {
  console.log("logout");
  res.send("Logout");
};

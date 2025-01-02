import bcrypt from "bcryptjs";
//import User from "../models/usermodel.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const login = async (req, res) => {
    try{
         const {username, password} = req.body;//input request to the server
         
         const user = await User.findOne({ username });//serach the user is exsting the system
  
         const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");// compare hash(inputpassword) == stored hashpassword
  
      if (!user || !isPasswordCorrect) {
        return res.status(404).json({ message: "Invald username or password" });
      }
  
      
      // this token generate function is inside the utils folder
      generateTokenAndSetCookie(user._id,res);
  
      res.status(201).json({ 
          _id:user._id,//this id is generated by mongoose
          fullName:user.fullName,
          username:user.username,
          profilePic:user.profilePic
       });
  
  
    } 
    catch(error){
      console.error(error);
      res.status(500).json({ message: "An error occurred during login." });
  
    } 
  };


  export const logout = (req, res) => {
    try {
      res.cookie("jwt","",{maxAge: 0});
  
      console.log("User logged out successfully.");
      
      res.status(200).json({ message: "Logout successful." });
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({ message: "An error occurred during logout." });
    }
  };
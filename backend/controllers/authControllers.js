import bcrypt from 'bcryptjs';
import db from '../config/db.js'; // Assuming db.js exports a MySQL connection

import generateTokenAndSetCookie from "../utils/generateToken.js";
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req, res) => {
  const { username, password,role,nic } = req.body;
  console.log('Username:', username);

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
  //   const [userResult] = await db.promise().query('SELECT * FROM manager WHERE Manager_User_Name = ?', [username]);
  //   if (userResult.length === 0) {
  //     return res.status(404).json({ message: 'User not found' });
  //   }
  //   const saltRounds = 10;
  //   const hashedPassword = await bcrypt.hash(password, saltRounds);

  //   await db.promise().query('UPDATE manager SET Manager_Password = ? WHERE Manager_User_Name = ?', [hashedPassword, username]);
  //   res.status(200).json({ message: 'Password updated successfully' });
  // } catch (error) {
  //   console.error('Error updating password:', error);
  //   res.status(500).json({ message: 'Internal server error' });
  // }

    // Wrap db.query in a Promise to make it awaitable
    //------------------------------------------------------------------------------------------------------

    let sql, queryParams;
    console.log(role);

    if (role === 'Manager'){
      sql = 'SELECT Manager_User_Name, Manager_Name, Manager_id, Manager_Password FROM manager WHERE Manager_User_Name = ?';
      queryParams = [username];
    } else if (role === 'Customer') {
      sql = 'SELECT Customer_User_Name, Customer_Name, Customer_id, Customer_Password,nic FROM customer WHERE Customer_User_Name = ?';
      queryParams = [username];
    } else if (role === 'Employee') {
      sql = 'SELECT Employee_User_Name, Employee_Name, Employee_id, Employee_Password FROM employee WHERE Employee_User_Name = ?';
      queryParams = [username];
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }
    console.log(role);

    const results = await new Promise((resolve, reject) => {
      db.query(sql, queryParams, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });

    console.log('Results:', results);

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];
    console.log('User:', user);

    if (role === 'Customer' && user.nic !== nic) {
      return res.status(401).json({ message: 'Invalid NIC' });
    }

    const passwordField = `${role}_Password`;
  console.log('Password Field:', passwordField); // Log the password field name

  if (!user[passwordField]) {
    return res.status(500).json({ message: 'Password field is missing in the database' });
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user[passwordField]);
  console.log(password, user[passwordField]); // Log the password comparison

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    

  
      
      // this token generate function is inside the utils folder
      const token = generateTokenAndSetCookie(user[`${role}_id`], res);
      
  
       const sendUser = {
      [`${role}_id`]: user[`${role}_id`],
      [`${role}_Name`]: user[`${role}_Name`],
      [`${role}_User_Name`]: user[`${role}_User_Name`],
    };
      res.status(200).json({ message: 'Login successful', user: sendUser, token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error', error: err });
    }
  };



  
  export const logout = (req, res) => {
    console.log(req.user)
    try {
      
      res.cookie("jwt", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 0, // Clear cookie immediately
        path: "/", // Match the original path
      });
  
      console.log("User logged out successfully.");
      res.status(200).json({ message: "Logout successful." });
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({ message: "An error occurred during logout." });
    }
  };
  
import jwt from "jsonwebtoken";
//import User from "../models/usermodel.js";

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;
		// retrieve the jwt (JSON Web Token) stored in cookies sent by the client (browser) to the server. Here's an explanation of how it works:

		// cookies wl eka token ekak hri store krl na
		if (!token){
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECREAT);

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

	    const user = await User.findById(decoded.userID).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;

		next();
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default protectRoute;
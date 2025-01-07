import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie=(userID,res)=>{
    const token  =jwt.sign({userID,},process.env.JWT_SECREAT,{
        expiresIn:'15d'
    })
/// in this "jwt"  is the cookie name
    res.cookie("jwt",token,{
      maxAge:15*24*60*60*1000, //ms
      httpOnly:true,// prevent XSS attacks
      sameSite:"strict",
    })

    return token;
}

export default generateTokenAndSetCookie;
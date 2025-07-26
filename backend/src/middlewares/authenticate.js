import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
export const authenticate = async(req, res, next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            res.status(401).json({success:false, message: 'Access denied. No token provided'})
            return
        }

        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET)

        if(tokenDecoded){
            // Attach user info to request object
            req.user = {
                id: tokenDecoded.id,
                isAdmin: tokenDecoded.isAdmin,
                email: tokenDecoded.email
            };
        }else{
            res.status(401).json({success: false, message: 'Not Authorized'})
        }

        next();

        
    } catch (error) {
        console.log('Error in userAuth middleware: ',error);
        res.status(500).json({success:false, message:'Internal server error'})       
    }
}

import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
const protect = async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decoded = await jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id);
        }
        catch(error){
            console.log(error);
            res.status(401); //unothorized status code
            throw new Error('Not authorized, token failed');
        }
    }
}

export default protect;
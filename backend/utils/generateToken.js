import jwt from 'jsonwebtoken'

const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'  // this third parameter is an option (expires after ...)
    })
}

export default generateToken
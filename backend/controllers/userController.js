import asyncHandler from 'express-async-handler'
import {validationResult } from 'express-validator'
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc authetication  
// @route Post /api/users/login
// @access public
const authUser = asyncHandler(async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(req.body.email)
      return res.status(400).json({ errors: errors.array()});
    }

    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user && await user.matchPassword(password)){
        
        res.json({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            lastName: user.lastName,
            userType: user.userType,
            region: user.region,
            city: user.city,
            token: generateToken(user._id)
        });
    }
    else{
        res.status(401)
        throw new Error("email or password not valid")
    }
    }
)

// @desc Register a new user 
// @route Post /api/users/signup
// @access public
const registerUser = asyncHandler(async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(req.body.email)
      return res.status(400).json({ errors: errors.array()});
    }

    const {email, password, firstName, lastName, region, city} = req.body;

    const userExist = await User.findOne({email});

    if(userExist){
        res.status(401);
        throw new Error('user already exist');
    }
    
    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        region,
        city
    })

    if(user){
        res.status(201);
        res.json({
            _id: user._id,
            firstName,
            lastName,
            email,
            lastName,
            region,
            city,
            token: generateToken(user._id)
        });
    }
    else{
        res.status(401)
        throw new Error("Problem when adding user - invalid user data")
    }
    }
);


export {authUser, registerUser}
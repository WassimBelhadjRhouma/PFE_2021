import mongoose from 'mongoose';
import bcrypt from "bcryptjs"

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
        default: 'client'
    },
    region: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },

},{timestamps: true})
userSchema.methods.matchPassword = async function(enteredPassword){  //we can create a method related to this model, so we can use it in other place when doing requests
    return await bcrypt.compare(enteredPassword, this.password)     // we used the function(){} syntax because //
                                                                    //in the arrow function there is no (this), //                                                      //this will not refers to the object that we need to refer to//
}
const User = mongoose.model('user', userSchema);

export default User;
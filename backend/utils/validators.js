import { body, validationResult } from 'express-validator'

const passwordValidator = {
    in: ["body"],
    isLength: {
      errorMessage: 'Password should be at least 7 chars long',
      // Multiple options would be expressed as an array
      options: { min: 7 },
    },
    custom: { 
        options: (value)=>{
            return new Promise( (resolve, reject) => {
                if(value){
                    if(!value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{7,}$/)){

                        reject(new Error(`password should contains at least: 1-Uppercase, 1-Lowecase, 1-Number`))
                    }
                    resolve(value)
                }
            })
        }
  },
} 

const emailValidator = {
    in: ["body"],
    errorMessage: 'Email is invalid',
    isEmail: {
        bail: true,
    },
}



export {passwordValidator, emailValidator}
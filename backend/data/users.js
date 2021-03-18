import bcrypt from "bcryptjs"

const users= [
    {
        firstName: 'wass',
        lastName: 'bhr',
        password: bcrypt.hashSync('123456'),
        email: 'example@ex.ex',
        region: 'ben arous',
        city: 'boumhal',
        userType: 'client'
    }

]
export default users;
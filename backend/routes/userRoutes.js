import express  from 'express';
import { checkSchema} from 'express-validator'
import { passwordValidator, emailValidator } from '../utils/validators.js';
import { authUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

// @ login 
router.post('/login', 
checkSchema({
email: emailValidator,
password: passwordValidator,
}),
authUser
)

// @ register / signup

router.post('/signup',checkSchema({
    email: emailValidator,
    password: passwordValidator,
}),
registerUser
)

export default router;


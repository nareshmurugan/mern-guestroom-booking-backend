import { Router } from 'express'
import { verifyToken } from '../middlewares/authMiddleware.js';
const Authrouter = Router();
import { UserSignInController, UserSignUpController } from '../controllers/authController.js';

// User SignUp 
Authrouter.post('/signup', UserSignUpController);
// User SignIn
Authrouter.post('/signin', UserSignInController);

Authrouter.post('/verify',verifyToken, async (req, res, next) =>{
    console.log("Verified");
    res.status(201).json({ result: 'Success'});
});


export default Authrouter;
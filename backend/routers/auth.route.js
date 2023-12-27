import { Router } from 'express'

const router = Router();
import { UserSignInController, UserSignUpController } from '../controllers/auth.controller';

// User SignUp 
router.post('/user/signup', UserSignUpController);
// User SignIn
router.post('/user/signin', UserSignInController);


export default router;
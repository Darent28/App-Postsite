import { Router } from 'express';
import { getUser, createUser, postUserlogin, getCurrentUser} from '../controllers/users.controller.js';

const router = Router();

router.post ("/register", createUser)

router.post ("/login", postUserlogin)

router.get ("/home", getCurrentUser)

router.get ("/users", getUser)



export default router;
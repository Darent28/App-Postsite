import { Router } from 'express';
import { getUser, createUser, postUserlogin, getCurrentUser} from '../controllers/users.controller.js';

const router = Router();

router.post ("/register", createUser)

router.post ("/login", postUserlogin)

router.get ("/home", getCurrentUser, (req, res) => {
    // check if currentUser exists
    if (req.currentUser){
      // currentUser is authenticated, return protected data
      res.send('Welcome ${req.currentUser.name}!');
    } else {
      // currentUser is not authenticated, return error message
      res.status(401).json('Unauthorized');
    }
  })

router.get ("/users", getUser)



export default router;
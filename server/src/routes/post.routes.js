import { Router } from 'express';
import { postPost, getPost} from '../controllers/post.controller.js';

const router = Router();


router.post ("/post", postPost);
router.get ("/getpost", getPost);

export default router;
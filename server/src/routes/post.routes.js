import { Router } from 'express';
import { postPost, getPost, deletePost} from '../controllers/post.controller.js';

const router = Router();


router.post ("/post", postPost);
router.get ("/getpost", getPost);
router.delete ("/deletePost/:id", deletePost);

export default router;
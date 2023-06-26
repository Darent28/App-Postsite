import { Router } from 'express';
import { postPost, getPost, deletePost, editPost } from '../controllers/post.controller.js';

const router = Router();

router.post ("/post", postPost);
router.get ("/getpost", getPost);
router.delete ("/deletePost/:id", deletePost);
router.put ("/editPost/:id", editPost);

export default router;
import { Router } from 'express';
import { postPost } from '../controllers/post.controller.js';

const router = Router();


router.post ("/post", postPost);

export default router;
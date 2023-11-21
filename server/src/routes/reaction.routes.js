import { Router } from 'express';
import { getReaction, postReaction, updateReaction } from '../controllers/reaction.controller.js';

const router = Router();

router.post("/postReaction", postReaction);

router.put("/updateReaction", updateReaction);

router.get("/getReaction/:id", getReaction);

export default router;
import express from 'express';

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);

router.post('/spaces', createSpace);
router.get('/spaces', getSpaces);

export default router;
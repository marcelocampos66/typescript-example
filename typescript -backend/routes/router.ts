import { Router } from 'express';

const router = Router();

import UserController from '../controllers/users';

router.get('/users', UserController.getAllUsers);
router.get('/users/create', UserController.create);

export default router;

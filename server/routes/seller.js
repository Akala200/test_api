/* eslint-disable no-unused-vars */

import { Router } from 'express';
import profileController from '../controllers/profileController';
import auth from '../middlewares/authMiddleware';

const router = Router();

const {
  updateProfile
} = profileController;

router.put('/update', auth, updateProfile);


export default router;

import express from 'express';
import {
  getInterestingness
} from '../controllers/index.js';

const router = express.Router();

router.get('/', getInterestingness);

export default router;
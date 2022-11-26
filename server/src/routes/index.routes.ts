import { Router } from 'express';
import airbnbRouter from './airbnb.routes';

const router = Router();

router.use('/airbnb', airbnbRouter);

export default router;

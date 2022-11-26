import { Router } from 'express';
import getListings from '../controlles/airbnb.controller';

const airbnbRouter = Router();

airbnbRouter.get('/', getListings);

export default airbnbRouter;

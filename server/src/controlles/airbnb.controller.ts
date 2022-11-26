import { Request, Response } from 'express';
import { collections } from '../config/mongoose';

const getListings = async (_req: Request, res: Response) => {
  console.log('hi from getListings');
  const listings = await collections.abbListings?.find().limit(10).toArray();
  return res.json(listings);
};

export default getListings;

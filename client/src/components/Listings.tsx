import React, { useEffect } from 'react';
import api from '../api/axios.config';
import Listing from './Listing';

function Listings() {
  useEffect(() => {
    const getListings = async () => {
      api.get('/');
    };

    getListings();
  }, []);

  return (
    <div>
      Listings
      <Listing />
    </div>
  );
}

export default Listings;

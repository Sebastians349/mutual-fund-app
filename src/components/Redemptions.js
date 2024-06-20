// src/components/Redemptions.js

import React, { useEffect, useState } from 'react';
import { getRedemptions } from '../api/mutualFundService';

const Redemptions = () => {
  const [redemptions, setRedemptions] = useState([]);

  useEffect(() => {
    const fetchRedemptions = async () => {
      try {
        const data = await getRedemptions();
        setRedemptions(data);
      } catch (error) {
        console.error('Error loading redemptions', error);
      }
    };

    fetchRedemptions();
  }, []);

  return (
    <div>
      <h1>Redemptions</h1>
      <ul>
        {redemptions.map((red) => (
          <li key={red.id}>{red.name} - {red.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Redemptions;

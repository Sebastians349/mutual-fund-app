// src/components/Subscriptions.js

import React, { useEffect, useState } from 'react';
import { getSubscriptions } from '../api/mutualFundService';

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const data = await getSubscriptions();
        setSubscriptions(data);
      } catch (error) {
        console.error('Error loading subscriptions', error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div>
      <h1>Subscriptions</h1>
      <ul>
        {subscriptions.map((sub) => (
          <li key={sub.id}>{sub.name} - {sub.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Subscriptions;

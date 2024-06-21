// src/components/SubscriptionList.js

import React from 'react';

const SubscriptionList = ({ subscriptions }) => {
  return (
    <div>
      <h3>Subscriptions</h3>
      <ul>
        {subscriptions.map((sub) => (
          <li key={sub.id}>
            {sub.name} - {sub.amount} - {sub.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;

// src/components/RedemptionList.js

import React from 'react';

const RedemptionList = ({ redemptions }) => {
  return (
    <div>
      <h3>Redemptions</h3>
      <ul>
        {redemptions.map((red) => (
          <li key={red.id}>
            {red.name} - {red.amount} - {red.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedemptionList;

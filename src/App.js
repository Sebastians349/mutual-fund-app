// src/App.js

import React, { useEffect, useState } from 'react';
import { fetchSubscriptions, fetchRedemptions } from './api';
import SubscriptionList from './components/SubscriptionList';
import RedemptionList from './components/RedemptionList';

function App() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [redemptions, setRedemptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSubscriptions = async () => {
      try {
        const data = await fetchSubscriptions();
        setSubscriptions(data);
      } catch (err) {
        setError(err.message);
      }
    };

    const getRedemptions = async () => {
      try {
        const data = await fetchRedemptions();
        setRedemptions(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getSubscriptions();
    getRedemptions();
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <h1>Mutual Fund Transactions</h1>
      <h2>Subscriptions</h2>
      <SubscriptionList subscriptions={subscriptions} />
      <h2>Redemptions</h2>
      <RedemptionList redemptions={redemptions} />
    </div>
  );
}

export default App;

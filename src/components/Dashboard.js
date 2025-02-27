import React, { useState, useEffect } from 'react';

function Dashboard({ user }) {
  const [protectedData, setProtectedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/test/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch protected data');
        }
        
        const data = await response.json();
        setProtectedData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProtectedData();
  }, []);
  
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      
      <div className="user-profile">
        <h3>Welcome, {user.full_name || user.username}!</h3>
        <p>Username: {user.username}</p>
        {user.email && <p>Email: {user.email}</p>}
      </div>
      
      <div className="protected-data">
        <h3>Protected Data</h3>
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="data-container">
            <pre>{JSON.stringify(protectedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

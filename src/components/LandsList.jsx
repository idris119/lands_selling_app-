import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LandsList.css'; // Import the CSS file

function LandsList() {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    // Fetch all lands when the component mounts
    fetchLands();
  }, []);

  const fetchLands = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/lands');
      setLands(response.data);
    } catch (error) {
      console.error('Error fetching lands:', error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.patch(`http://127.0.0.1:3000/lands/approve/${id}`);
      fetchLands(); // Fetch lands again after approving
    } catch (error) {
      console.error('Error approving land:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/lands/${id}`);
      fetchLands(); // Fetch lands again after deleting
    } catch (error) {
      console.error('Error deleting land:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">List of Lands</h1>
      {lands.map((land) => (
        <div key={land.id} className="land-card">
          <h2 className="land-name">{land.name}</h2>
          <p className="land-location">Location: {land.location}</p>
          <p className="land-price">Price: {land.price}</p>
          {/* Additional Details */}
          <p className="land-size">Size: {land.size}</p>
          <p className="land-description">Description: {land.description}</p>

          {/* Approval Status */}
          {land.is_approved ? (
            <p className="land-approval-status">Status: Approved</p>
          ) : (
            <button onClick={() => handleApprove(land.id)}>Approve</button>
          )}

          {/* Delete Button */}
          <button onClick={() => handleDelete(land.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default LandsList;

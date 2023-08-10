import React, { useState, useEffect } from 'react';
import './Lands.css';
import { Link } from 'react-router-dom';

function Lands() {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    fetchLands();
  }, []);

  const fetchLands = async () => {
    try {
      const response = await fetch('/approvedlands');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLands(data);
    } catch (error) {
      console.error('Error fetching lands:', error);
    }
  };

  const handleDelete = async (landId) => {
    try {
      const response = await fetch(`/deleteland/${landId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Remove the deleted land from the frontend state
      setLands((prevLands) => prevLands.filter(land => land.id !== landId));
    } catch (error) {
      console.error('Error occurred while deleting land:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
      <div className="container">
        <h1 className="title">Lands</h1>
        <div className="lands-grid">
          {lands.map((land) => (
            <div key={land.id} className="land-card">
              <h2 className="land-name">{land.name}</h2>
              <p className="land-location">Location: {land.location}</p>
              <p className="land-price">Price: {land.price}</p>
              {/* Additional Details */}
              <p className="land-size">Size: {land.size}</p>
              <p className="land-description">Description: {land.description}</p>

              {/* Display the image if available */}
              {land.image && (
                <div className="land-image">
                  <img src={land.image} alt={`Land ${land.id}`} />
                </div>
              )}

              <p className="land-amenities">Amenities: {land.amenities}</p>
              <p className="land-proximity">Proximity to Road: {land.proximity_to_road}</p>
              <p className="land-messaging">Messaging: {land.messaging ? 'Yes' : 'No'}</p>
              <p className="land-approved">Is Approved: {land.is_approved ? 'Yes' : 'No'}</p>
              
              <Link to={`/Payment/${land.id}`} className="buy-button">Buy</Link>
              <button onClick={() => handleDelete(land.id)} className="delete-button">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lands;

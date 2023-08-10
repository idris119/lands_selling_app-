import React, { useState, useEffect } from 'react';
import './Houses.css';
import { Link } from 'react-router-dom';

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      const response = await fetch('/approvedhouses');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setHouses(data);
    } catch (error) {
      console.error('Error fetching houses:', error);
    }
  };

  const handleDelete = async (houseId) => {
    try {
      const response = await fetch(`/deletehouse/${houseId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Remove the deleted house from the frontend state
      setHouses((prevHouses) => prevHouses.filter(house => house.id !== houseId));
    } catch (error) {
      console.error('Error occurred while deleting house:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
      <div className="house-list-container">
        <h1 className="house-list-title">Houses</h1>
        <ul className="house-list">
          {houses.map((house) => (
            <li key={house.id} className="house-item">
              <p className="house-location">Location: {house.location}</p>
              <p className="house-size">Size: {house.size}</p>
              <p className="house-price">Price: {house.price}</p>
              <p className="house-bedrooms">Bedrooms: {house.bedrooms}</p>
              <p className="house-bathrooms">Bathrooms: {house.bathrooms}</p>
              <p className="house-amenities">Amenities: {house.amenities}</p>

              {house.image && (
                <div className="house-image">
                  <p>Main Image:</p>
                  <img
                    src={house.image}
                    alt={`House ${house.id}`}
                    className="house-image-preview"
                  />
                </div>
              )}

              <p className="house-distance">Distance: {house.distance}</p>
              <p className="house-description">Description: {house.description}</p>

              <p className="house-approved">
                Is Approved: {house.is_approved ? 'Yes' : 'No'}
              </p>
              <Link to={`/Payment/${house.id}`} className="buy-button">Buy</Link>
              <button onClick={() => handleDelete(house.id)} className="delete-button">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Houses;

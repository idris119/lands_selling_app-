import React, { useState, useEffect } from 'react';
import './Houses.css'; // Import your CSS stylesheet

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('/approvedhouses')
      .then((response) => response.json())
      .then((data) => setHouses(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Houses;

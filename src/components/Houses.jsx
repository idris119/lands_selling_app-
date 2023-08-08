import React, { useState, useEffect } from 'react';

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
      <h1>House List</h1>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            <p>Location: {house.location}</p>
            <p>Size: {house.size}</p>
            <p>Price: {house.price}</p>
            <p>Bedrooms: {house.bedrooms}</p>
            <p>Bathrooms: {house.bathrooms}</p>
            <p>Amenities: {house.amenities}</p>

            {/* Display the main image */}
            {house.image && (
              <div>
                <p>Main Image:</p>
                <img
                  src={house.image}
                  alt={`House ${house.id}`}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            )}

            <p>Distance: {house.distance}</p>
            <p>Description: {house.description}</p>

            <p>Is Approved: {house.is_approved ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Houses;
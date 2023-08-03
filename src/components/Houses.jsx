import React, { useState, useEffect } from 'react';
// import './House.css'

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('/approvedhouses')
      .then((r) => r.json())
      .then((data) => setHouses(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
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
            {/* Assuming house.images is an array of image URLs */}
            <p>Images: {house.images.join(', ')}</p>
            <p>Distance: {house.distance}</p>
            <p>Description: {house.description}</p>
            {/* Assuming house.image is the main image URL */}
            <p>Image: {house.image}</p>
            <p>Is Approved: {house.is_approved ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Houses;
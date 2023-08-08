import React from 'react';
import { useParams } from 'react-router-dom';

const HouseDetails = ({ houses }) => {
  const { houseId } = useParams();

  const house = houses.find(house => house.id === parseInt(houseId, 10));

  if (!house) {
    return <p>House not found.</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h1>{house.location} Details</h1>
      <p>Location: {house.location}</p>
      <p>Size: {house.size}</p>
      <p>Price: {house.price}</p>
      <p>Bedrooms: {house.bedrooms}</p>
      <p>Bathrooms: {house.bathrooms}</p>
      <p>Amenities: {house.amenities}</p>

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
    </div>
  );
};

export default HouseDetails;

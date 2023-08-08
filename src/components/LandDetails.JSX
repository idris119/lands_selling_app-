 import React from 'react';
import { useParams } from 'react-router-dom';

function LandDetails({ lands }) {
  const { landId } = useParams();

  const land = lands.find(land => land.id === parseInt(landId, 10));

  if (!land) {
    return <p>Land not found.</p>;
  }

  return (
    <div className="container">
      <h1 className="title">{land.name} Details</h1>
      <div className="land-card">
        <h2 className="land-name">{land.name}</h2>
        <p className="land-location">Location: {land.location}</p>
        <p className="land-price">Price: {land.price}</p>
        <p className="land-size">Size: {land.size}</p>
        <p className="land-description">Description: {land.description}</p>

        {land.image && (
          <div className="land-image">
            <img src={land.image} alt={`Land ${land.id}`} />
          </div>
        )}

        <p className="land-amenities">Amenities: {land.amenities}</p>
        <p className="land-proximity">Proximity to Road: {land.proximity_to_road}</p>
        <p className="land-messaging">Messaging: {land.messaging ? 'Yes' : 'No'}</p>
        <p className="land-approved">Is Approved: {land.is_approved ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default LandDetails;
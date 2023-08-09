import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ApproveProperties = () => {
  const location = useLocation();
  const { propertyData } = location.state;

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Assuming you have a property data array with the required properties
    const propertyList = propertyData.formData;
    setProperties(propertyList);
  }, [propertyData]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Properties Awaiting Approval</h1>
      <div className="row">
        {properties.map((property, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <img src={property.image} className="card-img-top" alt="Property" />
              <div className="card-body">
                <h5 className="card-title">{property.location}</h5>
                <p className="card-text">Price: ${property.price}</p>
                <p className="card-text">Size: {property.size} sqft</p>
                {property.bedrooms && <p className="card-text">Bedrooms: {property.bedrooms}</p>}
                {property.bathrooms && <p className="card-text">Bathrooms: {property.bathrooms}</p>}
                {property.amenities && <p className="card-text">Amenities: {property.amenities}</p>}
                {property.distance && <p className="card-text">Distance: {property.distance} km</p>}
                {property.description && <p className="card-text">Description: {property.description}</p>}
                {property.proximity_to_road && <p className="card-text">Proximity to Road: {property.proximity_to_road}</p>}
                <p className="card-text">Messaging: {property.messaging ? 'Yes' : 'No'}</p>
                {property.name && <p className="card-text">Name: {property.name}</p>}
                {property.vehicle_type && <p className="card-text">Vehicle Type: {property.vehicle_type}</p>}
                {property.make && <p className="card-text">Make: {property.make}</p>}
                {property.model && <p className="card-text">Model: {property.model}</p>}
                {property.colour && <p className="card-text">Colour: {property.colour}</p>}
                {property.capacity && <p className="card-text">Capacity: {property.capacity}</p>}
                <p className="card-text">Location: {property.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproveProperties;

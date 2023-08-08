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
                {/* Add more property details here */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproveProperties;
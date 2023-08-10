import React, { useState, useEffect } from 'react';

const ApproveProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchNonApprovedProperties();
  }, []);

  const fetchNonApprovedProperties = async () => {
    try {
      const responseVehicles = await fetch('/vehiclesneedingapproval');
      const vehiclesData = await responseVehicles.json();

      const responseHouses = await fetch('/housesneedingapproval');
      const housesData = await responseHouses.json();

      const responseLands = await fetch('/landsneedingapproval');
      const landsData = await responseLands.json();

      const nonApprovedProperties = [
        ...vehiclesData.map(property => ({ ...property, propertyType: 'vehicle' })),
        ...housesData.map(property => ({ ...property, propertyType: 'house' })),
        ...landsData.map(property => ({ ...property, propertyType: 'land' }))
      ];

      setProperties(nonApprovedProperties);
    } catch (error) {
      console.error('Error fetching non-approved properties:', error);
    }
  };

  const handleApprove = async (propertyId, propertyType) => {
    try {
      let endpoint;
      if (propertyType === 'land') {
        endpoint = `/lands/approve/${propertyId}`;
      } else if (propertyType === 'house') {
        endpoint = `/houses/approve/${propertyId}`;
      } else if (propertyType === 'vehicle') {
        endpoint = `/vehicles/approve/${propertyId}`;
      }

      console.log('Approving property:', endpoint); // Debug log

      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_approved: true }), // Change 'approved' to 'is_approved'
      });
      
      console.log('Response:', response); // Debug log

      if (response.ok) {
        // Update the UI to remove the approved property from the list
        setProperties(properties.filter(property => property.id !== propertyId));
      } else {
        console.error('Error approving property:', response.status);
      }
    } catch (error) {
      console.error('Error approving property:', error);
    }
  };

  

  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '40px' }}>
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
    <div className="card-footer">
  {property.approved ? (
    <p className="text-success">Approved</p>
  ) : (
    <button
    onClick={() => handleApprove(property.id, property.propertyType)}
    className="btn btn-primary"
  >
    Approve
  </button>
  )}
</div>

    </div>
    </div>
    ))}
    </div>
    </div>
    </div>
    );
    };
export default ApproveProperties;


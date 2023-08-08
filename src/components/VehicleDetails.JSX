import React from 'react';
import { useParams } from 'react-router-dom';

const VehicleDetails = ({ vehicles }) => {
  const { vehicleId } = useParams();

  const vehicle = vehicles.find(vehicle => vehicle.id === parseInt(vehicleId, 10));

  if (!vehicle) {
    return <p>Vehicle not found.</p>;
  }

  return (
    <div style={{ marginTop: '120px', marginBottom: '20px' }}>
      <h1>{vehicle.make} {vehicle.model} Details</h1>
      <p>Vehicle Type: {vehicle.vehicle_type}</p>
      <p>Make: {vehicle.make}</p>
      <p>Model: {vehicle.model}</p>
      <p>Colour: {vehicle.colour}</p>
      <p>Capacity: {vehicle.capacity}</p>
      <p>Price: {vehicle.price}</p>
      
      {vehicle.image && (
        <div>
          <p>Image:</p>
          <img src={vehicle.image} alt={`Vehicle ${vehicle.id}`} style={{ maxWidth: '200px' }} />
        </div>
      )}

      <p>Is Approved: {vehicle.is_approved ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default VehicleDetails;
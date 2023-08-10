import React, { useState, useEffect } from 'react';
import './vehicles.css';
import { Link } from 'react-router-dom'; 

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/approvedvehicles')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched vehicles data:', data);
        setVehicles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error occurred while fetching vehicles:', error);
        setError('Error occurred while fetching vehicles.');
        setLoading(false);
      });
  }, []);

  const handleDelete = (vehicleId) => {
    // Send a DELETE request to the backend to delete the vehicle
    fetch(`/deletevehicle/${vehicleId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Remove the deleted vehicle from the frontend state
        setVehicles((prevVehicles) => prevVehicles.filter(vehicle => vehicle.id !== vehicleId));
      })
      .catch((error) => {
        console.error('Error occurred while deleting vehicle:', error);
      });
  };

  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
      <div className="vehicle-list-container">
        <h1 className="vehicle-list-title">Vehicles</h1>
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <ul className="vehicle-list">
            {vehicles.map((vehicle) => (
              <li key={vehicle.id} className="vehicle-item">
                <p className="vehicle-type">Vehicle Type: {vehicle.vehicle_type}</p>
                <p className="vehicle-make">Make: {vehicle.make}</p>
                <p className="vehicle-model">Model: {vehicle.model}</p>
                <p className="vehicle-colour">Colour: {vehicle.colour}</p>
                <p className="vehicle-capacity">Capacity: {vehicle.capacity}</p>
                <p className="vehicle-price">Price: {vehicle.price}</p>

                {vehicle.image && (
                  <div className="vehicle-image">
                    <p>Image:</p>
                    <img
                      src={vehicle.image}
                      alt={`Vehicle ${vehicle.id}`}
                      className="vehicle-image-preview"
                    />
                  </div>
                )}

                <p className="vehicle-approved">
                  Is Approved: {vehicle.is_approved ? 'Yes' : 'No'}
                </p>
                <Link to={`/Payment/${vehicle.id}`} className="buy-button">Buy</Link>
                <button onClick={() => handleDelete(vehicle.id)} className="delete-button">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Vehicles;

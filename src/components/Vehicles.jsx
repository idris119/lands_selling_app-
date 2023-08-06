import React, { useState, useEffect } from 'react';

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
        console.log('Fetched vehicles data:', data); // Add this line to see the fetched data in the console
        setVehicles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error occurred while fetching vehicles:', error); // Add this line to see any errors in the console
        setError('Error occurred while fetching vehicles.');
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '120px',marginBottom: '20px' }}>
      <h1>Vehicle List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {vehicles.map((vehicle) => (
            <li key={vehicle.id}>
              <p>Vehicle Type: {vehicle.vehicle_type}</p>
              <p>Make: {vehicle.make}</p>
              <p>Model: {vehicle.model}</p>
              <p>Colour: {vehicle.colour}</p>
              <p>Capacity: {vehicle.capacity}</p>
              <p>Price: {vehicle.price}</p>
              <p>Image: {vehicle.image}</p>
              <p>Is Approved: {vehicle.is_approved ? 'Yes' : 'No'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Vehicles;

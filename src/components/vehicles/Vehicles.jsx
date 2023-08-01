import React, { useState, useEffect } from 'react';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/vehicles')
      .then((r) => r.json())
      .then((data) => setVehicles(data));
  }, []);

  return (
    <div>
      <h1>Vehicle List</h1>
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
    </div>
  );
};

export default Vehicles;

// import React, { useState, useEffect } from 'react';
// import './vehicles.css'

// const Vehicles = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('/approvedvehicles')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log('Fetched vehicles data:', data); // Add this line to see the fetched data in the console
//         setVehicles(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error occurred while fetching vehicles:', error); // Add this line to see any errors in the console
//         setError('Error occurred while fetching vehicles.');
//         setLoading(false);
//       });
//   }, []);
  
//   return (
//     <div className="d-flex justify-content-center" style={{ marginTop: '120px', marginBottom: '20px' }}>
//       <h1>Vehicle List</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <ul>
//           {vehicles.map((vehicle) => (
//             <li key={vehicle.id}>
//               <p>Vehicle Type: {vehicle.vehicle_type}</p>
//               <p>Make: {vehicle.make}</p>
//               <p>Model: {vehicle.model}</p>
//               <p>Colour: {vehicle.colour}</p>
//               <p>Capacity: {vehicle.capacity}</p>
//               <p>Price: {vehicle.price}</p>
              
//               {/* Display the image if available */}
//               {vehicle.image && (
//                 <div>
//                   <p>Image:</p>
//                   <img src={vehicle.image} alt={`Vehicle ${vehicle.id}`} style={{ maxWidth: '200px' }} />
//                 </div>
//               )}

//               <p>Is Approved: {vehicle.is_approved ? 'Yes' : 'No'}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Vehicles;
import React, { useState, useEffect } from 'react';
import './vehicles.css';

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

  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '120px', marginBottom: '20px' }}>

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
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default Vehicles;
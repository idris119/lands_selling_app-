import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('/approvedhouses')
      .then((response) => response.json())
      .then((data) => setHouses(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
      <h1>House List</h1>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            {/* Use Link to navigate to HouseDetails */}
            <Link to={`/houses/${house.id}`}>
              <p>Location: {house.location}</p>
            </Link>
            {/* Other house information */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Houses;

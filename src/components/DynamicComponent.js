import React, { useState } from 'react';

const DynamicComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setData([]); // Reset the data when the option changes
    // Fetch the data from the backend based on the selected option
    fetchData(event.target.value);
  };

  const fetchData = async (option) => {
    try {
      const response = await fetch(`/${option}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="vehicles">Houses</option>
        <option value="lands">Lands</option>
        <option value="vehicles">Vehicles</option>
      </select>
      {data.length > 0 && (
        <div>
          <h2>{selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DynamicComponent;
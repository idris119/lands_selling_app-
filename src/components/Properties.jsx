import React, { useState } from 'react';
import Vehicles from './Vehicles';
import Houses from './Houses';
import LandsList from './Lands';
const Properties = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case 'vehicle':
        return <Vehicles />;
      case 'house':
        return <Houses />;
      case 'lands':
        return <LandsList/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Properties</h1>
      <select onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="vehicle">Vehicles</option>
        <option value="house">Houses</option>
        <option value="lands">Lands</option>
      </select>
      {renderSelectedOption()}
    </div>
  );
};

export default Properties;

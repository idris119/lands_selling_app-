import React, { useState } from 'react';

const Addproperty = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState('');

  const handlePropertyTypeChange = (e) => {
    setSelectedPropertyType(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can navigate to the respective route based on the selectedPropertyType
    // For example, you can use React Router to programmatically navigate to the selected property type route.
    if (selectedPropertyType === 'vehicles') {
      // Navigate to the route for adding vehicles
      // You can use React Router for navigation, like: history.push('/add/vehicles');
    } else if (selectedPropertyType === 'lands') {
      // Navigate to the route for adding lands
    } else if (selectedPropertyType === 'houses') {
      // Navigate to the route for adding houses
    }
  };

  return (
    <div>
      <h1>Add Property</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="propertyType">Choose Property Type:</label>
          <select
            id="propertyType"
            name="propertyType"
            value={selectedPropertyType}
            onChange={handlePropertyTypeChange}
          >
            <option value="">Select Property Type</option>
            <option value="vehicles">Vehicles</option>
            <option value="lands">Lands</option>
            <option value="houses">Houses</option>
          </select>
        </div>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default Addproperty;

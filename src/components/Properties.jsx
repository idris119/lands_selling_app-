import React, { useState } from 'react';
import Vehicles from './Vehicles';
import Houses from './Houses';
import Lands from './Lands'; // Update the import to match the component name

const Properties = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [allProperties, setAllProperties] = useState({
    vehicles: [], 
    houses: [],  
    lands: [],   
  }); 
  const [selectedProperty, setSelectedProperty] = useState(null); // State to hold the selected property

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedProperty(null); // Clear selected property when a new option is selected
  };

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleBuyClick = () => {
    // Implement the logic to handle the "Buy" button click here
    // You can use the selectedProperty to perform the necessary action
    console.log('Buy button clicked for property:', selectedProperty);
  };

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case 'vehicle':
        return <Vehicles properties={allProperties.vehicles} />; 
      case 'house':
        return <Houses properties={allProperties.houses} />;     
      case 'land':
        return <Lands properties={allProperties.lands} />;       
      default:
        return null;
    }
  };

  // Callback function to add an approved property to the properties list
  const handlePropertyApproved = (property) => {
    const updatedProperties = { ...allProperties };
    if (property.id) {
      // Update existing property
      updatedProperties[property.type + 's'] = updatedProperties[
        property.type + 's'
      ].map((prop) => (prop.id === property.id ? property : prop));
    } else {
      // Add new property
      updatedProperties[property.type + 's'] = [
        ...updatedProperties[property.type + 's'],
        property,
      ];
    }
    setAllProperties(updatedProperties);
    setSelectedProperty(null); // Clear selected property after update or add
  };
  
  const handlePropertyDelete = (property) => {
    const updatedProperties = { ...allProperties };
    updatedProperties[property.type + 's'] = updatedProperties[
      property.type + 's'
    ].filter((prop) => prop !== property);
    setAllProperties(updatedProperties);
  };
  
  const handlePropertyUpdate = (property) => {
    setSelectedProperty(property);
  };
  

  return (
    <div>
      <h1>Properties</h1>
      <select onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="vehicle">Vehicles</option>
        <option value="house">Houses</option>
        <option value="land">Lands</option>
      </select>
      {renderSelectedOption()}

       {/* Display detailed property information */}
       {selectedProperty && (
        <div>
          <h2>Property Details</h2>
          {/* Display property details */}
          <div>
            {/* ... (display selectedProperty details) */}
            <button onClick={handleBuyClick}>Buy</button>
          </div>
        </div>
      )}

      {/* Display all properties */}
      <div>
  {Object.values(allProperties).flatMap((properties, typeIndex) =>
    properties.map((property, propertyIndex) => (
      <div key={`${typeIndex}-${propertyIndex}`}>
        {/* Display property information */}
        {/* ... (display property details) */}
        
        {/* Buttons for Delete, Update, and Buy */}
        <div>
          <button onClick={() => handlePropertyDelete(property)}>
            Delete
          </button>
          <button onClick={() => handlePropertyUpdate(property)}>
            Update
          </button>
          <button onClick={() => handlePropertyClick(property)}>
            Buy
          </button>
        </div>
      </div>
    ))
  )}
</div>

    </div>
  );
};

export default Properties;

import React from 'react';
import Houses from './Houses'; // Assuming you have this file in the same directory
import LandsList from './LandsList'; // Assuming you have this file in the same directory
import Vehicles from './Vehicles'; // Assuming you have this file in the same directory

const ApprovedProperties = () => {
  return (
    <div>
      <Houses />
      <LandsList />
      <Vehicles />
    </div>
  );
};

export default ApprovedProperties;
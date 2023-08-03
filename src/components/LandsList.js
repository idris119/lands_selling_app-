import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LandsList.css'; // Import the CSS file

function LandsList() {
    const [lands, setLands] = useState([]);


    useEffect(() => {
        // Fetch all lands when the component mounts
        fetchLands();
    }, []);

    const fetchLands = async () => {
        try {
        const response = await axios.get('/approvedlands');
        setLands(response.data);
        } catch (error) {
        console.error('fetching lands:', error);
        }
    };


    return (
        <div className="container">
        <h1 className="title">List of Lands</h1>
        {lands.map((land) => (
            <div key={land.id} className="land-card">
            <h2 className="land-name">{land.name}</h2>
            <p className="land-location">Location: {land.location}</p>
            <p className="land-price">Price: {land.price}</p>
            {/* Additional Details */}
            <p className="land-size">Size: {land.size}</p>
            <p className="land-description">Description: {land.description}</p>
            </div>
        ))}
        </div>
    );
}

export default LandsList;

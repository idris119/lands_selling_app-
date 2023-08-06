import React, { useState, useEffect } from 'react';
import './Lands.css'; // Import the CSS file

function Lands() {
    const [lands, setLands] = useState([]);

    useEffect(() => {
        // Fetch all lands when the component mounts
        fetchLands();
    }, []);

    const fetchLands = async () => {
        try {
            const response = await fetch('/approvedlands');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setLands(data);
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

export default Lands;
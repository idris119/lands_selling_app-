import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '.Lands.css'; // Import the CSS file

function LandsList() {
    const [lands, setLands] = useState([]);

    useEffect(() => {
        //enter the backend api here
        axios.get('http://127.0.0.1:3000/lands').then((response) => {
        setLands(response.data);
        });
    }, []);

    return (
        <div className="container">
            <h1 className="title">List of Lands</h1>
            {lands.map((land) => (
                <div key={land.id} className="land-card">
                <h2 className="land-name">{land.name}</h2>
                <p className="land-location">Location: {land.location}</p>
                <p className="land-price">Price: {land.price}</p>
                {/* Add more details as needed */}
                </div>
            ))}
            </div>
        );
    }


export default LandsList;

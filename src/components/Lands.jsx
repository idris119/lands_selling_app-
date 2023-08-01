// LandsList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LandsList() {
    const [lands, setLands] = useState([]);

    useEffect(() => {
        //enter the backend api here
        axios.get('http://127.0.0.1:3000/lands').then((response) => {
        setLands(response.data);
        });
    }, []);

    return (
        <div>
        <h1>List of Lands</h1>
        {lands.map((land) => (
            <div key={land.id}>
            <h2>{land.name}</h2>
            <p>Location: {land.location}</p>
            <p>Price: {land.price}</p>
            {/* Add more details as needed */}
            </div>
        ))}
        </div>
    );
}

export default LandsList;

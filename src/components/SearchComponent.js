import React, { useState } from 'react';
import './SearchComponent.css';

function SearchComponent() {
  const [propertyType, setPropertyType] = useState('lands');
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOption, setSortOption] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchResults, setSearchResults] = useState({
    lands: [],
    houses: [],
    vehicles: []
  });

  const handleSearch = () => {
    const searchParams = new URLSearchParams({
      property_type: propertyType,
      query,
      location,
      min_price: minPrice,
      max_price: maxPrice,
      sort_by: sortOption,
      sort_order: sortOrder
    });

    fetch(`/search?${searchParams.toString()}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
      })
      .catch(error => {
        console.error('Error performing search:', error);
      });
  };

  return (
    <div className={`search-container ${propertyType}-bg`}>
      <h1>Property Search</h1>
      <div className="form-group">
        <label>Property Type:</label>
        <select value={propertyType} onChange={e => setPropertyType(e.target.value)} className="select-field">
          <option value="lands">Lands</option>
          <option value="houses">Houses</option>
          <option value="vehicles">Vehicles</option>
        </select>
      </div>
      <div className="form-group">
        <label>Search Query:</label>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} className="input-field" />
      </div>
      <div className="form-group">
        <label>Location:</label>
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} className="input-field" />
      </div>
      <div className="form-group">
        <label>Min Price:</label>
        <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} className="input-field" />
      </div>
      <div className="form-group">
        <label>Max Price:</label>
        <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} className="input-field" />
      </div>
      <div className="form-group">
        <label>Sort By:</label>
        <select value={sortOption} onChange={e => setSortOption(e.target.value)} className="select-field">
          <option value="price">Price</option>
          <option value="size">Size</option>
        </select>
      </div>
      <div className="form-group">
        <label>Sort Order:</label>
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="select-field">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="button-container">
        <button onClick={handleSearch} className="button">Search</button>
      </div>
      <div className="results-container">
        <h2 className="results-header">Search Results</h2>
        <div className="scrollable-list">
          <ul className="result-list">
            {/* Display search results based on propertyType */}
            {propertyType === 'lands' && searchResults.lands && (
              <div>
                <h3>Lands</h3>
                <ul>
                  {searchResults.lands.map(land => (
                    <li key={land.id} className="result-item">
                      {land.name} - {land.location} - ${land.price}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {propertyType === 'houses' && searchResults.houses && (
              <div>
                <h3>Houses</h3>
                <ul>
                  {searchResults.houses.map(house => (
                    <li key={house.id} className="result-item">
                      {house.type} - {house.location} - ${house.price}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {propertyType === 'vehicles' && searchResults.vehicles && (
              <div>
                <h3>Vehicles</h3>
                <ul>
                  {searchResults.vehicles.map(vehicle => (
                    <li key={vehicle.id} className="result-item">
                      {vehicle.make} {vehicle.model} - {vehicle.vehicle_type} - ${vehicle.price}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
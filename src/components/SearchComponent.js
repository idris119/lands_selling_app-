import React, { useState } from 'react';
import './SearchComponent.css'; 

const SearchComponent = () => {
  const databases = [
    { name: 'Houses', value: 'houses' },
    { name: 'Vehicles', value: 'vehicles' },
    { name: 'Land', value: 'land' },
  ];

  const [selectedDatabase, setSelectedDatabase] = useState(databases[0].value);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleDatabaseChange = (event) => {
    setSelectedDatabase(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  //Will have to set up the search end-point in backend first
  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search/${selectedDatabase}?q=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };
  // Define the placeholder based on the selected database
  let placeholderText = '';
  switch (selectedDatabase) {
    case 'houses':
      placeholderText = 'Search houses...';
      break;
    case 'vehicles':
      placeholderText = 'Enter, Make, Model or Year...';
      break;
    case 'land':
      placeholderText = 'Search land...';
      break;
    default:
      placeholderText = 'Enter your search query...';
  }

  return (
    <div className="container">
      <div className="searchBar">
        <input
          type="text"
          placeholder={placeholderText}
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="input"
        />
        <select value={selectedDatabase} onChange={handleDatabaseChange} className="select">
          {databases.map((database) => (
            <option key={database.value} value={database.value}>
              {database.name}
            </option>
          ))}
        </select>
        <button onClick={handleSearch} className="button">
          Search
        </button>
      </div>
      <div>
        <h2 className="heading">Search Results</h2>
        <ul className="results">
          {searchResults.map((result) => (
            <li key={result.id} className="resultItem">
              {result.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
import React, { useState } from 'react';

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

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your search query..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <select value={selectedDatabase} onChange={handleDatabaseChange}>
          {databases.map((database) => (
            <option key={database.value} value={database.value}>
              {database.name}
            </option>
          ))}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
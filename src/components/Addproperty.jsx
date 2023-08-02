import React, { useState } from 'react';

const Addproperty = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [formData, setFormData] = useState({
    location: '',
    size: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    amenities: '',
    images: '',
    distance: '',
    description: '',
    image: '',
    proximity_to_road: '',
    messaging: false,
  });

  const handlePropertyTypeChange = (e) => {
    setSelectedPropertyType(e.target.value);
    setFormData({}); // Reset form data when property type changes
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission based on the selectedPropertyType
    if (selectedPropertyType === 'vehicles') {
      console.log('Adding Vehicle:', formData);
      // Add logic to submit vehicle data to the server or perform other actions
    } else if (selectedPropertyType === 'lands') {
      console.log('Adding Land:', formData);
      // Add logic to submit land data to the server or perform other actions
    } else if (selectedPropertyType === 'houses') {
      console.log('Adding House:', formData);
      // Add logic to submit house data to the server or perform other actions
    }
    // Optionally, you can clear the form fields after submission
    setFormData({});
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
        {selectedPropertyType === 'houses' && (
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleFormChange}
            />

            <label htmlFor="size">Size:</label>
            <input
              type="number"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleFormChange}
            />

            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleFormChange}
            />

            <label htmlFor="bedrooms">Bedrooms:</label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleFormChange}
            />

            <label htmlFor="bathrooms">Bathrooms:</label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleFormChange}
            />

            <label htmlFor="amenities">Amenities:</label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              value={formData.amenities}
              onChange={handleFormChange}
            />

            <label htmlFor="images">Images:</label>
            <input
              type="text"
              id="images"
              name="images"
              value={formData.images}
              onChange={handleFormChange}
            />

            <label htmlFor="distance">Distance:</label>
            <input
              type="number"
              id="distance"
              name="distance"
              value={formData.distance}
              onChange={handleFormChange}
            />

            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleFormChange}
            />

            <label htmlFor="image">Image:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleFormChange}
            />

            <label htmlFor="is_approved">Is Approved:</label>
            <input
              type="checkbox"
              id="is_approved"
              name="is_approved"
              checked={formData.is_approved}
              onChange={handleFormChange}
            />
          </div>
        )}
        {selectedPropertyType === 'lands' && (
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
            {/* Other land-specific fields */}
          </div>
        )}
        {selectedPropertyType === 'vehicles' && (
          <div>
            <label htmlFor="make">Make:</label>
            <input
              type="text"
              id="make"
              name="make"
              value={formData.make}
              onChange={handleFormChange}
            />
            {/* Other vehicle-specific fields */}
          </div>
        )}
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default Addproperty;

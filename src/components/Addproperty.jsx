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
    name: '',
    vehicle_type: '',
    make: '',
    model: '',
    colour: '',
    capacity: '',
    is_approved: false,
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
    <div className="container">
      <h1>Add Property</h1>
      <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
      <label htmlFor="propertyType" className="form-label">Choose Property Type:</label>
          <select
           className="form-select"
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
           <div className="mb-3">
           <label htmlFor="location" className="form-label">Location:</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleFormChange}
            />
            </div>


            <div className="mb-3">
      <label htmlFor="size" className="form-label">Size:</label>
      <input
        type="number"
        className="form-control"
        id="size"
        name="size"
        value={formData.size}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="price" className="form-label">Price:</label>
      <input
        type="number"
        className="form-control"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleFormChange}
      />
    </div> <div className="mb-3">
      <label htmlFor="bedrooms" className="form-label">Bedrooms:</label>
      <input
        type="number"
        className="form-control"
        id="bedrooms"
        name="bedrooms"
        value={formData.bedrooms}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="bathrooms" className="form-label">Bathrooms:</label>
      <input
        type="number"
        className="form-control"
        id="bathrooms"
        name="bathrooms"
        value={formData.bathrooms}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="amenities" className="form-label">Amenities:</label>
      <input
        type="text"
        className="form-control"
        id="amenities"
        name="amenities"
        value={formData.amenities}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="images" className="form-label">Images:</label>
      <input
        type="text"
        className="form-control"
        id="images"
        name="images"
        value={formData.images}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="distance" className="form-label">Distance:</label>
      <input
        type="number"
        className="form-control"
        id="distance"
        name="distance"
        value={formData.distance}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description:</label>
      <input
        type="text"
        className="form-control"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="image" className="form-label">Image:</label>
      <input
        type="text"
        className="form-control"
        id="image"
        name="image"
        value={formData.image}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="is_approved"
        name="is_approved"
        checked={formData.is_approved}
        onChange={handleFormChange}
      />
      <label htmlFor="is_approved" className="form-check-label">Is Approved:</label>
    </div>

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

            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
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

            <label htmlFor="image">Image:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleFormChange}
            />

            <label htmlFor="proximity_to_road">Proximity to Road:</label>
            <input
              type="text"
              id="proximity_to_road"
              name="proximity_to_road"
              value={formData.proximity_to_road}
              onChange={handleFormChange}
            />

            <label htmlFor="messaging">Messaging:</label>
            <input
              type="checkbox"
              id="messaging"
              name="messaging"
              checked={formData.messaging}
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
         {selectedPropertyType === 'vehicles' && (
          <div>
            <label htmlFor="vehicle_type">Vehicle Type:</label>
            <input
              type="text"
              id="vehicle_type"
              name="vehicle_type"
              value={formData.vehicle_type}
              onChange={handleFormChange}
            />

            <label htmlFor="make">Make:</label>
            <input
              type="text"
              id="make"
              name="make"
              value={formData.make}
              onChange={handleFormChange}
            />

            <label htmlFor="model">Model:</label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleFormChange}
            />

            <label htmlFor="colour">Colour:</label>
            <input
              type="text"
              id="colour"
              name="colour"
              value={formData.colour}
              onChange={handleFormChange}
            />

            <label htmlFor="capacity">Capacity:</label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={formData.capacity}
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
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default Addproperty;

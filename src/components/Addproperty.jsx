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

     // Redirect to the "Properties" page after successful submission
  };

  return (
    <div className="container mb-4 mt-4">
      <h1 className="text-center">Add Property</h1>
      <form onSubmit={handleFormSubmit}>
      <div className="d-flex justify-content-center" style={{ marginTop: '50px',marginBottom:'-20px' }}>
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
  <div className="row">
    <div className="col-md-6">
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
      </div>
    </div>

    <div className="col-md-6">
      <div className="mb-3">
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
  </div>
)}

        {selectedPropertyType === 'lands' && (
  <div>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name:</label>
      <input
        type="text"
        className="form-control"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleFormChange}
      />
    </div>

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

    <div className="mb-3">
      <label htmlFor="proximity_to_road" className="form-label">Proximity to Road:</label>
      <input
        type="text"
        className="form-control"
        id="proximity_to_road"
        name="proximity_to_road"
        value={formData.proximity_to_road}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="messaging"
        name="messaging"
        checked={formData.messaging}
        onChange={handleFormChange}
      />
      <label htmlFor="messaging" className="form-check-label">Messaging:</label>
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
{selectedPropertyType === 'vehicles' && (
  <div>
    <div className="mb-3">
      <label htmlFor="vehicle_type" className="form-label">Vehicle Type:</label>
      <input
        type="text"
        className="form-control"
        id="vehicle_type"
        name="vehicle_type"
        value={formData.vehicle_type}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="make" className="form-label">Make:</label>
      <input
        type="text"
        className="form-control"
        id="make"
        name="make"
        value={formData.make}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="model" className="form-label">Model:</label>
      <input
        type="text"
        className="form-control"
        id="model"
        name="model"
        value={formData.model}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="colour" className="form-label">Colour:</label>
      <input
        type="text"
        className="form-control"
        id="colour"
        name="colour"
        value={formData.colour}
        onChange={handleFormChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="capacity" className="form-label">Capacity:</label>
      <input
        type="number"
        className="form-control"
        id="capacity"
        name="capacity"
        value={formData.capacity}
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
  <button type="submit" className="btn btn-primary d-block mx-auto mt-3">Add Property</button>
      </form>
    </div>
  );
};

export default Addproperty;
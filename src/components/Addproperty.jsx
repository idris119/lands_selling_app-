import React, { useState } from 'react';
import './Addproperty.css';

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
setFormData({ ...formData, vehicle_type: '', make: '', model: '', colour: '', capacity: '' });
};

const handleFormChange = (e) => {
const { name, value, type, checked } = e.target;
const newValue = type === 'checkbox' ? checked : value;
setFormData({ ...formData, [name]: newValue });
};

const handleFormSubmit = async (e) => {
e.preventDefault();

try {
let response;

if (selectedPropertyType === 'vehicles') {
response = await fetch('/vehicles', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(formData),
});

if (!response.ok) {
throw new Error('Error adding vehicle');
}
} else if (selectedPropertyType === 'lands') {
response = await fetch('/lands', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(formData),
});

if (!response.ok) {
throw new Error('Error adding land');
}
} else if (selectedPropertyType === 'houses') {
response = await fetch('/houses', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(formData),
});

if (!response.ok) {
throw new Error('Error adding house');
}
}

    // Clear the form fields for the next property
    setFormData({
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

  } catch (error) {
    console.error('Error:', error);
  }
};


return (
<div className={`add-property-container ${selectedPropertyType}-bg`}>
<div className="container mb-4 mt-5 pb-5" style={{ paddingBottom: '80px' }}>
<h1 className="text-center">Add Property</h1>
<form onSubmit={handleFormSubmit}>
<div className="mb-3">
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
</div>
)}
<button type="submit" className="btn btn-primary d-block mx-auto mt-3">
Add Property
</button>
</form>
</div>
</div>
);
};

export default Addproperty;